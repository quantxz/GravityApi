import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: '4yn9c413ubj91bczunqg',
  password: 'pscale_pw_pC0YCu6kFYYZNaMrXbCx1ohst5XYeOfYupKyMGs8Zg3',
  database: 'gfapi',
  ssl: {
    rejectUnauthorized: true
  }
});

export { connection };
