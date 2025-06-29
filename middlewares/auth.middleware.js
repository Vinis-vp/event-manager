import jwt from 'jsonwebtoken';

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

export function onlyOrganizer(req, res, next) {
  if (req.user?.role !== 'organizer') {
    return res.status(403).json({ error: 'Access denied: organizer only' });
  }
  next();
}
