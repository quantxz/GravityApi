import mysql from 'mysql2';

const connection = mysql.createConnection({
  database: 'gfapi',
  user: 'xacat11bdshg6btyzz49',
  host: 'aws.connect.psdb.cloud',
  password: 'pscale_pw_OqdUcXQS30Fx2amHYhFb8bJQeWH0ujwGYWWRIrLMp62',
  ssl: {
    rejectUnauthorized: true
  },
});

export { connection };
