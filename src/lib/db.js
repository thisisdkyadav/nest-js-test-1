import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

async function queryWrapper(queryString, queryValues = []) {
  const result = await sql.query(queryString, queryValues);

  if (Array.isArray(result)) {
    return {
      rows: result,
      rowCount: result.length,
    };
  }
  
  if (result && typeof result.rowCount === 'number') {
    return {
      rows: [],
      rowCount: result.rowCount,
    };
  }

  console.warn('Unexpected response type from Neon database:', result);
  return {
    rows: [],
    rowCount: 0,
    neon_raw_result: result,
  };
}

const db = {
  query: queryWrapper,
};

export async function executeQuery({ query, values = [] }) {
  try {
    return await db.query(query, values);
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

export default db; 