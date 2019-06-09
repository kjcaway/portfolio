const express = require("express");
const db = require("../db");
const schema = require('../schemas/schemaContents')
const logger = require('../logger');
const _ = require('lodash');
const moment = require('moment');
const upload = require('../utils/fileupload');
const multer = require('multer');

const router = express.Router();


/**
 * Method : GET
 * CONTENTS 조회
 */
router.get("/", (req, res, next) => {
  let where = '';

  const qWhere = req.query.where;
  const toJson = JSON.parse(qWhere);

  _.forIn(toJson, (value, key) => {
    let term = ` AND ${key} = "${value}"`;
    where += term
  });

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
  // FormData의 경우 req로 부터 데이터를 얻을수 없다.
  // upload 핸들러(multer)를 통해서 데이터를 읽을 수 있다
  
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return next(err);
    } else if (err) {
      return next(err);
    }

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

});

/**
 * Method : DELETE
 * CONTENT 삭제 
 */
router.delete("/:seq", (req, res, next) => {
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
