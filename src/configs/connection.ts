import mysql from 'mysql2';

const connection = mysql.createConnection({
  database: 'gfapi',
  user: 'vonmw8bs3g39njcog1mh',
  host: 'aws.connect.psdb.cloud',
  password: 'pscale_pw_IEHha71PeoePgFQgxlfI3DXVDNYXN4fm31cf6hdMr9x',
  ssl: {
    rejectUnauthorized: true
  },
});

export { connection };
