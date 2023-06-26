import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: 'buyqnd90oy8n1qpdda5r',
  password: 'pscale_pw_oOLXZaffvdoKCywNrwFASZ7AbAtnKA83NJQISIIFg0F',
  database: 'gfapi',
  ssl: {
    rejectUnauthorized: true
  }
});

export { connection };
