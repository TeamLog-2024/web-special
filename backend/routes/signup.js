import express from 'express';
import db from '../db';

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const query1 = `SELECT COUNT(*) AS count FROM userInfo WHERE username = ?`;

  db.query(query1, [username], (err, results, fields) => {
    if(err) console.log(err);
    console.log('query1 worked', results);

    const count = results[0].count;

    if(count === 0) {
      const query2 = `INSERT INTO userInfo (username, password) VALUES = (?, ?)`;
      db.query(query2, [username, password], (err, results, fields) => {
        if(err) console.log(err);
        console.log('query2 worked', results);
        res.redirect('/login');
      });
    } else {
      res.redirect('/signup');
    }
  })
});

export default router;