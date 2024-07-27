import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0303',
  database: 'web_special'
});

db.connect((err) => {
  if(err) console.log(err);
  console.log('connected to mysql database');
});

export default db;