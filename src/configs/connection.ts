import mysql from 'mysql2';

const connection = mysql.createConnection('mysql://c1iaput886k7mns71a0q:pscale_pw_rTwHlxErYTDkU5Ah9JCcPC5EPsyWqGglEWcU2Qlxbi2@aws.connect.psdb.cloud/gfapi?ssl={"rejectUnauthorized":true}')

export { connection };
