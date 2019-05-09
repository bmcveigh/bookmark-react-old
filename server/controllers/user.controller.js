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

export function authenticateUser(req, res) {
  const username = req.body.username;
  const pass = req.body.pass;

  User.findOne({ username, pass }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user });
  });
}

export function loadUserById(req, res) {
  User.findOne({ _id: req.params.id }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user });
  });
}

export function loadUserByEmail(req, res) {
  User.findOne({ email: req.params.email }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user });
  });
}

export function updateUser(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ user: req.body });

    return false;
  });
}
