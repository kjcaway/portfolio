const express = require("express");
const db = require("../db");
const jwt = require('jsonwebtoken')
const jwtConfig = require('../config/jwt')
const _ = require('lodash');

const router = express.Router();

/**
 * 사용자 조회
 */
router.get("/", (req, res) => {
  db((err, connection) => {
    connection.query("SELECT * FROM MEMBER", (err, rows) => {
      connection.release();
      if (err) {
        throw err;
      }

      return res.json({ data: rows });
    });
  });
});

/**
 * 로그인
 */
router.post("/signin", (req, res) => {
  const {userid, password} = req.body

  if(userid === undefined || password === undefined){
    return res.status(400).json({
      data : 'Bad request'
    });
  }
  db((err, connection) => {
    connection.query("SELECT * FROM MEMBER WHERE `id` = \"" + userid + "\"", (err, rows) => {
      connection.release();
      if (err) {
        throw err;
      }
      
      if(_.isEmpty(rows)) {
        return res.status(401).json({ 
          data: 'Wrong userid'
        });
      } else {
        const user = rows[0];
        if(user.password === password){
          let token = jwt.sign(
            {
                name: user.name,
                email: user.email
            }, 
            jwtConfig.secret, 
            {
                expiresIn: jwtConfig.expire,
                subject: 'userInfo'
            });
          res.cookie("token", token);
          return res.json({
            token: token
          })
        } else{
          return res.status(401).json({ 
            data: 'Wrong password'
          });
        }
      }
    });
  });
});

/**
 * token 검증
 */
router.get("/check", (req, res) => {
  const token = req.headers['x-access-token'] || req.query.token
  const decodedToken = jwt.verify(token, jwtConfig.secret);

  if(decodedToken){
    return res.json({data: 'Valid token'});
  } else {
    return res.status(401).json({data: "Invalid token"});
  }
})


module.exports = router;
