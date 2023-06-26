import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: 'ay547om749y2oqs4e3dw',
  password: 'pscale_pw_5IEq8JAZ1CUaTw41BA5bQhWivFv4tZq7aINVoxkI4e',
  database: 'gfapi',
  ssl: {
    rejectUnauthorized: true
  },
});

export { connection };
