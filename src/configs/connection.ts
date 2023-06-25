import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: 'defg84zc3lckmbfifc5s',
  password: 'pscale_pw_XfIrFB6HCzl61CJqHBANmv1QjPIXIXZYhWR4FseQ1a6',
  database: 'gfapi',
  ssl: {
    rejectUnauthorized: true
  }
});

export { connection };
