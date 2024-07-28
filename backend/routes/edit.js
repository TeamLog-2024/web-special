import express from "express";
import db from "../db.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.post('/:id', (req, res) => {
  const postId = req.params.id;
  const { title, detail } = req.body;
  const author = req.session.username;
  const editQuery1 = 'SELECT author FROM postInfo WHERE id = ?';
  const editQuery2 = 'UPDATE postInfo SET title = ?, detail = ? WHERE id = ?';

  db.query(editQuery1, [postId], (err, results, fields) => {
    if(err) console.log(err);

    if(results.length > 0 && results[0].author === author) {
      db.query(editQuery2, [title, detail, postId], (err, results, fields) => {
        if(err) console.log(err);
        console.log('post updated : ', results);
      })
    }
  })
})

export default router;