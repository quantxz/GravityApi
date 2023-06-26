import mysql from 'mysql2';

const connection = mysql.createConnection({
  database: 'gfapi',
  user: 'ay547om749y2oqs4e3dw',
  host: 'aws.connect.psdb.cloud',
  password: 'pscale_pw_5IEq8JAZ1CUaTw41BA5bQhWivFv4tZq7aINVoxkI4e'
});

export { connection };
