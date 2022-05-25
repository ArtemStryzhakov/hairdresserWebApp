var express = require('express');
var pool = require('./testDB');
const { route } = require('./users');
var router = express.Router();

/* GET home page. */
router.get('/table', async function(req, res) {
  let result = await pool.getBookings()
  let styles = await pool.getStyles()
  let session = req.session.loggedin ? true : false
  let username = session ? req.session.username : ""
 // console.log(result)
  //res.send({ bookingsAr: result, styles: styles, session: session, username: username });
  res.json({bookingsAr: result, styles: styles, session: session, username: username})
  //res.render('index', { title: 'Hairdresser WebApp ALPHA 1.0', bookings: result, styles: styles, session: session, username: username});
});

router.post('/', async function(req, res) {
  if(req.session.loggedin){
    let name = req.body.nameField
    let date = req.body.dateField
    let time = convertTime12to24(req.body.timeField)
    let styleid = req.body.hairStyle
    pool.addBooking(name, date, time, styleid)
    res.redirect('/')
  }else{
    res.redirect('/')
  }
});
router.post('/addh', async function(req, res){
  if(req.session.loggedin){
    let style = req.body.stylename
    let  pic = req.body.picURL
    pool.addHairStyle(style, pic)
    res.redirect('/')
  }else{
    res.redirect('/')
  }
})
router.get('/delete/:bookingid', async function(req, res) {
  if(req.session.loggedin){
    pool.removeById(req.params.bookingid)
    res.redirect('/')
  }else{
    res.redirect('/')
  }
});

router.use(require("./users"))

module.exports = router;

const convertTime12to24 = time12h => {
  
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":");
  if(hours > 12){
    return time12h
  }
  if (hours === "12") {
    hours = "00";
  }
 
  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }
 
  return `${hours}:${minutes}`;
};
