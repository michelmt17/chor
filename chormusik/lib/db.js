import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '85.215.223.140',
  user: 'nodejs',
  password: 'JmbalfaomegaX2909',
  database: 'chor',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;