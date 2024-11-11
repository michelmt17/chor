import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'db.eulencode.de',
  user: 'chor',
  password: 'Jmbalfaomega29.09',
  database: 'Main_Data',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;