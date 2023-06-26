import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: 'wkg2emy5fbk8xqxnwek4',
  password: 'pscale_pw_9YvlMtgcZERJYEef35JZINu0R7hJK6dzIMmjKxi5d2q',
  database: 'gfapi',
  ssl: {
    rejectUnauthorized: true
  }
});

export { connection };
