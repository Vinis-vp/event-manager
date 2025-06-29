import { db } from '../config/db.js';

export async function createEvent({ name, description, date, location, user_id }) {
  const [result] = await db.query(
    `INSERT INTO events (name, description, date, location, user_id) VALUES (?, ?, ?, ?, ?)`,
    [name, description, date, location, user_id]
  );
  return result.insertId;
}

export async function listEvents({ date = '', location = '' }) {
  const query = `
    SELECT e.*, u.name as organizer
    FROM events e
    JOIN users u ON u.id = e.user_id
    WHERE e.date LIKE ? AND e.location LIKE ?
    ORDER BY e.date DESC
  `;
  const [rows] = await db.query(query, [`%${date}%`, `%${location}%`]);
  return rows;
}

export async function updateEvent(id, { name, description, date, location }) {
  const [result] = await db.query(
    `UPDATE events SET name = ?, description = ?, date = ?, location = ? WHERE id = ?`,
    [name, description, date, location, id]
  );
  return result.affectedRows;
}

export async function deleteEvent(id) {
  const [result] = await db.query(`DELETE FROM events WHERE id = ?`, [id]);
  return result.affectedRows;
}
