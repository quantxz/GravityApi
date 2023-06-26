import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: 'fqae432nzludxjookaen',
  password: 'pscale_pw_qdLIRswtrEyWzkBum6CHju81YlRKisDsBVm8fF46zBb',
  database: 'gfapi',
  ssl: {
    rejectUnauthorized: true
  }
});

export { connection };
