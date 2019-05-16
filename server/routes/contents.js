const express = require("express");
const db = require("../db");
const schema = require('../schemas/schemaContents')
const logger = require('../logger');
const _ = require('lodash');
const moment = require('moment');

const router = express.Router();

/**
 * Method : GET
 * CONTENTS 조회
 */
router.get("/", (req, res, next) => {
  let where = '';

  if('where' in req.body){
    _.forIn(req.body.where, (value, key) => {
      let term = ` AND ${key} = "${value}"`;
      where += term
    });
  }

  db((err, connection) => {
    let query = connection.query("SELECT * FROM CONTENTS WHERE 1=1" + where + " ORDER BY date_write DESC", (err, rows) => {
      connection.release();
      if (err) {
        return next(err);
      }

      return res.json({ data: rows });
    });

    logger.debug('Execute query.\n\n\t\t' + query.sql + '\n');
  });
});

/**
 * Method : POST
 * CONTENTS 입력
 */
router.post("/", (req, res, next) => {
  const validError = schema.validate(req.body);
  if(validError.length > 0){
    logger.error("invalid request, " + validError[0].message)
    return res.status(400).json({'error': 1, 'message' :validError[0].message})
  }

  db((err, connection) => {
    let data = _.assign(req.body, {
      date_write: moment().format('YYYY-MM-DD HH:mm:ss')
    })
    
    let query =connection.query("INSERT INTO CONTENTS SET ?", data, (err, results, fields) => {
      connection.release();
      if (err) {
        return next(err);
      }

      return res.json({ results: results });
    });

    logger.debug('Execute query.\n\n\t\t' + query.sql + '\n');
  });
});

/**
 * Method : DELETE
 * CONTENT 삭제 
 */
router.delete("/remove/:seq", (req, res, next) => {
  db((err, connection) => {
    let query = connection.query("DELETE FROM CONTENTS WHERE SEQ = ?", req.params.seq, (err, results, fields) => {
      connection.release();
      if (err) {
        return next(err);
      }

      return res.json({ results: results });
    });
    logger.debug('Execute query.\n\n\t\t' + query.sql + '\n');
  });
});

module.exports = router;
