import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();

// Load a user by their username.
router.route('/user/:id').get(UserController.loadUserById);

router.route('/user-email/:email').get(UserController.loadUserByEmail);

router.route('/user/authenticate').post(UserController.authenticateUser);

router.route('/user/:id/update').post(UserController.updateUser);

// Add a new user registration.
router.route('/user-registration').post(UserController.addUser);

export default router;
