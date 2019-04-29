const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  db((err, connection) => {
    connection.query("SELECT * FROM MEMBER", (err, rows) => {
      connection.release();
      if (err) {
        console.log(err);
        return res.json({ err: err });
      }

      return res.json({ data: rows });
    });
  });
});

module.exports = router;
