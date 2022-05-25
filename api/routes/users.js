var express = require('express');
var bcrypt = require('bcryptjs')
var pool = require('./testDB')
var router = express.Router();

router.get('/login', async function(req, res){
  res.render('login', {message: ""})
})

router.get('/signup', async function(req, res){
  res.render('signup', {message: ""})
})

router.post('/login', async function(req, res){
  const body = req.body
  if(!(body.password && body.username)){
    return res.render('login', {message: "Can't login with empty login/password."})
  }
  let exist = await pool.checkUserExist(body.username)
  if(exist){
    let check = await bcrypt.compare(body.password, await pool.getUserPass(body.username))
    if(check){
      req.session.loggedin = true
      req.session.username = body.username
      res.redirect('/')
    }else{
      return res.render('login', {message: "Invalid password."})
    }
  }else{
    return res.render('login', {message: "User doesen't exist."})
  }
})

router.post('/signup', async function(req, res){
  const body = req.body
  if(!(body.username && body.password)){
    return res.render('signup', {message: "Can't register with empty fields."})
  }
  if(await pool.checkUserExist(body.username)){
    return res.render('signup', {message: "User already exists."})
  }
  if(body.password != body.passwordr){
    return res.render('signup', {message: "You couldn't repeat your password."})
  }
  let username = body.username
  let salt = await bcrypt.genSalt(12)
  let hashpass = await bcrypt.hash(body.password, salt)
  pool.registerUser(username, hashpass)
  res.render('login', {message: "Now please login."})
})

router.get('/logout', function(req, res){
  req.session.loggedin = false
  req.session.username = null
  res.redirect('/')
})

module.exports = router