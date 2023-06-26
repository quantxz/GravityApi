import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: 'xx0lj425gbddx1csdoxe',
  password: 'pscale_pw_hhmHimAO8yrPuB4cOdthPQkceofXPrnUBlRNFP68u67',
  database: 'gfapi',
  ssl: {
    rejectUnauthorized: true
  }
});

export { connection };
