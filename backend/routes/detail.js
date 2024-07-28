import express from 'express';
import db from '../db.js';

const router = express.Router();

router.get('/:id', (req, res) => {
  const postId = req.params.id;
  const postQuery = `SELECT id, title, detail, author, create_time FROM postInfo WHERE id = ?`;

  db.query(postQuery, [postId], (err, results, fields) => {
    if(err) console.log(err);
    res.json(results[0]);
  });
});

router.delete('/:id', (req, res) => {
  const postId = req.params.id;
  const author = req.session.username;

  const delQuery1 = 'SELECT author FROM postInfo WHERE id = ?';
  const delQuery2 = 'DELETE FROM postInfo WHERE id = ?'; 

  db.query(delQuery1, [postId], (err, results, fields) => {
    if (err) console.log(err);

    if(results.length > 0 && results[0].author === author) {
      db.query(delQuery2, [postId], (err, results, fields) => {
        if(err) console.log(err);
        console.log('post deleted : ', results);
      });
    } else {
      res.redirect('/');
    }
  })
})

export default router;