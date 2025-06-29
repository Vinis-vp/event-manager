import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../models/users.model.js';

export async function register(req, res) {
  const { name, email, password, role } = req.body;

  const existing = await findUserByEmail(email);
  if (existing) return res.status(409).json({ error: 'Email already in use' });

  const hashed = await bcrypt.hash(password, 10);
  const userId = await createUser({ name, email, password: hashed, role });

  res.status(201).json({ id: userId, message: 'User created' });
}

export async function login(req, res) {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.json({ token });
}
