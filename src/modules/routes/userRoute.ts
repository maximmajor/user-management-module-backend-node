import express, { Router } from 'express';
import userController from '../controllers/userController';


const router: Router = express.Router();
const UserController = new userController();



// Create a new User
router.post('/create', UserController.createUser);
router.get('/',  UserController.getAllUsers);
router.get('/:userId', UserController.getUserById);
export default router;
