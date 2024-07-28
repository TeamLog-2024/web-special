import express from "express";
import db from "../db.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.post('/', (req, res) => {
  const { title, detail } = req.body;
  const author = req.session.username;
  const writeQuery = `INSERT INTO postInfo (title, detail, author) VALUES (?, ?, ?)`;

  db.query(writeQuery, [title, detail, author], (err, results, fields) => {
    if (err) console.log(err);
    console.log('post saved : ', results);
    res.redirect('/');
  });
});

export default router;