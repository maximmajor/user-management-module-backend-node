import { Request, Response } from 'express';
import userService from '../services/userService';
import IUser from '../interfaces/userInterface';
import { HttpException } from '../middlewares/HttpException';
import { validateCreateUser } from '../validation/user'
class userController {
    private userService: userService;

    constructor() {
        this.userService = new userService();
    }

    public createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const userData: IUser = req.body;
            const { error, value } = validateCreateUser.validate(userData);
            if (error) {
                res.status(400).json({ error: error.details[0].message });
                return
            }
            const user = await this.userService.createUser(value);
            res.status(200).json({ status: 'success', user });
        } catch (error: any) {
            if (error instanceof HttpException) {
                const { statusCode, message } = error;
                res.status(statusCode).json({ message });
            } else {
                const { statusCode, message } = error;
                res.status(statusCode).json({ error: message });
            }
        }
    }
    public getAllUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json({ status: 'success', users });
        } catch (error: any) {
            if (error instanceof HttpException) {
                const { statusCode, message } = error;
                res.status(statusCode).json({ message });
            } else {
                const { statusCode, message } = error;
                res.status(statusCode).json({ error: message });
            }
        }
    };

    public getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId: string = req.params.userId; // Removed unnecessary 'as string' assertion
            const getUser: IUser | null = await this.userService.getUserById(userId);
            if (!getUser) {
                res.status(404).json({ status: 'failure', message: 'User not found' });
            } else {
                res.status(200).json({ status: 'success', User: getUser });
            }
        } catch (error: any) {
            if (error instanceof HttpException) {
                const { statusCode, message } = error;
                res.status(statusCode).json({ message });
            } else {
                const { statusCode, message } = error;
                res.status(statusCode).json({ error: message });
            }
        }
    };

}

export default userController;
