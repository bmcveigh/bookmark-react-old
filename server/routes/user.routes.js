import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();

// Load a user by their username.
router.route('/user/:username').get(UserController.loadUserByUsername);

// Add a new Post
router.route('/user-registration').post(UserController.addUser);

export default router;
