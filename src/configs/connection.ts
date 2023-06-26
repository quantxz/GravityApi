import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: 'lfkuaq5rbgbcd3rgdt22',
  password: 'pscale_pw_QunNH9w01wwazFafubmF4Rsx0V8gSMExUts4ZlBlUws',
  database: 'gfapi',
  ssl: {
    rejectUnauthorized: true
  }
});

export { connection };
