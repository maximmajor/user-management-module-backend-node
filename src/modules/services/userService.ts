import IUser from '../interfaces/userInterface';
import bcrypt from 'bcrypt';
import userRepository from '../repositories/userRepository';
import { HttpException } from '../middlewares/HttpException';


class userService {
    private userRepository: userRepository;

    constructor() {
        this.userRepository = new userRepository();
    }

    public async createUser(userData: IUser): Promise<IUser | String> {
        const { first_name, last_name, phone_number, password, email, date_of_birth } = userData;
        const checkIfEmailExist = await this.userRepository.findUserByEmail(email)
        if (checkIfEmailExist) {
            throw new HttpException(409, 'Email Already Exist');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const dataInfo: any = {
            first_name,
            last_name,
            email,
            password: hashedPassword,
            phone_number,
            date_of_birth,

        }
        const createUser = await this.userRepository.createUser(dataInfo);
        return createUser;
    }


    public async getAllUsers(): Promise<IUser[]> {
        const users = await this.userRepository.findAllUsers();
        return users;
    }

    public async getUserById(userId: string): Promise<IUser | null> {
        const user = await this.userRepository.findUserById(userId);
        return user;
    }
}

export default userService;
