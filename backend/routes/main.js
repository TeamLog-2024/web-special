import express from 'express';
import db from '../db.js';

const router = express.Router();

router.get('/', (req, res) => {
  const listQuery = `SELECT id, title from postInfo`;

  db.query(listQuery, (err, results, fields) => {
    if(err) console.log(err);
    console.log('data returned : ', results);
    res.send(results);
  })
});

export default router;