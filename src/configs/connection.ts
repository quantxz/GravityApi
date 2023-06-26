import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: '538ckbdrvqgnt69psk47',
  password: 'pscale_pw_PfRc8193t057ipBIuS7kOcOqzRYDyh0vOUPzJQAxHXI',
  database: 'gfapi',
  ssl: {
    rejectUnauthorized: true
  }
});

export { connection };
