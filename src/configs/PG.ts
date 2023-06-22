const { Pool } = require('pg');


export const pool = new Pool({
    connectionString: 'postgres://quantxz:0jIQpekrcX4P@ep-black-meadow-971825-pooler.us-east-2.aws.neon.tech/neondb',
    ssl: {
      rejectUnauthorized: false
    },
});