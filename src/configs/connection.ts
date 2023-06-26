import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: 'z5v6j7t80dxt7rmi0pm0',
  password: 'pscale_pw_bcHrjNmlZDyxWsh8CQXnHVrW0VdE17hHecHUXC0xTo6',
  database: 'gfapi',
  ssl: {
    rejectUnauthorized: true
  }
});

export { connection };
