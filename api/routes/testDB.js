const express = require("express");
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'eddjsgqx',
  host: 'tyke.db.elephantsql.com',
  database: 'eddjsgqx',
  password: 'b6W2dcDwuroU6tK_WJzCxtdO7AoGCkM4',
  port: 5432,
})

var getBookings = async () => {
    try {
        const res = await pool.query("select bookings.id, bookings.name, bookings.date, bookings.time, styles.stylename from bookings, styles where bookings.styleid = styles.id;")
        return res.rows
    } catch (err) {
        console.log(err.stack)
    }
}

var getStyles = async () => {
    try {
        const res = await pool.query("select * from styles;")
        return res.rows
    } catch (err) {
        console.log(err.stack)
    }
}
var addHairStyle = async (styleName, picURL) =>{
    try{
        await pool.query("insert into styles(stylename, url) values($1, $2);", [styleName,picURL])
    }catch(err){
        console.log(err.stack)
    }
}
var addBooking = async (name, date, time, styleid) =>{
    try{
        await pool.query("insert into bookings(name, date, time, styleid) values($1, $2, $3, $4);", [name, date, time, styleid])
    }catch(err){
        console.log(err.stack)
    }
}

var removeById = async (id) => {
    try{
        await pool.query("delete from bookings where id = $1;", [id])
    }catch(err){
        console.log(err.stack)
    }
}

var checkUserExist = async (username) => {
    try{
        const res = await pool.query("select * from users where username = $1;", [username])
        if (res.rowCount > 0){
            return true
        }
        else{
            return false
        }
    }catch(err){
        console.log(err.stack)
    }
}

var registerUser = async(username, password) =>{
    try{
        await pool.query("insert into users(username, password) values($1, $2);", [username, password])
    }catch(err){
        console.log(err.stack)
    }
}

var getUserPass = async(username) => {
    try{
        const res = await pool.query("select users.password from users where username = $1;", [username])
        return res.rows[0].password
    }catch(err){
        console.log(err.stack)
    }
}

module.exports = {
    getBookings,
    getStyles,
    addBooking,
    removeById,
    checkUserExist,
    registerUser,
    getUserPass,
    addHairStyle    
}