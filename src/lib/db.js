import { Pool } from 'pg';
import { neon } from '@neondatabase/serverless';

// For local development with PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// For serverless environments like Vercel
const sql = neon(process.env.DATABASE_URL);

// Choose the appropriate client based on the environment
const db = process.env.NODE_ENV === 'production' ? { query: sql } : pool;

export async function executeQuery({ query, values = [] }) {
  try {
    if (process.env.NODE_ENV === 'production') {
      // Using neon for serverless
      const result = await sql(query, values);
      return { rows: result };
    } else {
      // Using pg Pool for local development
      return await pool.query(query, values);
    }
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

export default db; 