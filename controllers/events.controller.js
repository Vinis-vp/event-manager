import * as EventModel from '../models/events.model.js';

export async function create(req, res) {
  const userId = req.user.id;
  const { name, description, date, location } = req.body;

  if (!name || !date || !location) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const id = await EventModel.createEvent({ name, description, date, location, user_id: userId });
  res.status(201).json({ id });
}

export async function list(req, res) {
  const { date = '', location = '' } = req.query;
  const events = await EventModel.listEvents({ date, location });
  res.json(events);
}

export async function update(req, res) {
  const { id } = req.params;
  const { name, description, date, location } = req.body;

  const affected = await EventModel.updateEvent(id, { name, description, date, location });
  if (affected === 0) return res.status(404).json({ error: 'Event not found' });

  res.json({ message: 'Event updated' });
}

export async function remove(req, res) {
  const { id } = req.params;

  const affected = await EventModel.deleteEvent(id);
  if (affected === 0) return res.status(404).json({ error: 'Event not found' });

  res.json({ message: 'Event deleted' });
}
