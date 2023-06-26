import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: '9mmhxqmkpbzwtm772kxi',
  password: 'pscale_pw_ePVXVg1lrjAANvlTWOKENK7o2usnmh8Yur54Zl07HGI',
  database: 'gravityfallapi',
  ssl: {
    rejectUnauthorized: true
  }
});

export { connection };
