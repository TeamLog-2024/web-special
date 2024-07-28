import express from 'express';
import session from 'express-session';
import path from 'path';
import signupRouter from './routes/signup.js';
import loginRouter from './routes/login.js';
import mainRouter from './routes/main.js';
import writeRouter from './routes/write.js';
import detailRouter from './routes/detail.js';
import editRouter from './routes/edit.js';

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

app.use('/api', mainRouter);
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/write', writeRouter);
app.use('/api/detail', detailRouter);
app.use('/api/edit', editRouter);

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});