import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: 'qmgxxfqk4gsqb56mb9qu',
  password: 'pscale_pw_OUVm5zd9D3b5zRtHmrNi6SjAdGkRjcpAc7ZA2YqfsOa',
  database: 'gravityfallapi',
  ssl: {
    rejectUnauthorized: true
  }
});

export { connection };
