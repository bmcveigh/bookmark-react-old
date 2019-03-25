import User from '../models/user';
import sanitizeHtml from 'sanitize-html';

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addUser(req, res) {
  if (!req.body.post.username || !req.body.post.pass || !req.body.post.email) {
    res.status(403).end();
  }

  const newEmail = new User(req.body.post);

  // Let's sanitize inputs
  newEmail.username = sanitizeHtml(newEmail.username);
  newEmail.pass = sanitizeHtml(newEmail.pass);
  newEmail.email = sanitizeHtml(newEmail.email);
  newEmail.created = sanitizeHtml(newEmail.created);
  newEmail.lastLogin = sanitizeHtml(newEmail.lastLogin);
  newEmail.isAdmin = sanitizeHtml(newEmail.lastLogin);

  newEmail.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}
