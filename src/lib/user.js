import { executeQuery } from './db';
import bcrypt from 'bcryptjs';

export async function getUserByEmail(email) {
  const { rows } = await executeQuery({
    query: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  });
  
  return rows[0];
}

export async function getUserById(id) {
  const { rows } = await executeQuery({
    query: 'SELECT * FROM users WHERE id = $1',
    values: [id],
  });
  
  return rows[0];
}

export async function createUser({ email, password, name = '' }) {
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const { rows } = await executeQuery({
    query: 'INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING *',
    values: [email, hashedPassword, name],
  });
  
  return rows[0];
}

export async function validatePassword(user, password) {
  if (!user || !password) return false;
  
  return bcrypt.compare(password, user.password);
} 