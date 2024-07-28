import express from 'express';
import db from '../db.js';

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM userInfo WHERE username = ? AND password = ?`;

  db.query(query, [username, password], (err, results, fields) => {
    if(err) console.log(err);
    console.log('query worked', results);

    if (results.length > 0) {
      req.session.username = results[0].username;
      req.session.isLoggedIn = true;
      res.redirect('/');
    } else {
      req.session.isLoggedIn = false;
      res.redirect('/login');
    }
  })
});

export default router;