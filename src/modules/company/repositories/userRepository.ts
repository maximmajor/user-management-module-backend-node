import IUser from '../interfaces/userInterface';
import userModel from '../models/userModel';

class userRepository {
    public userModel = userModel;


    public async createUser(userData: IUser): Promise<IUser> {
        const createUser = await this.userModel.create(userData);
        return createUser
    }

    public async findAllUsers(): Promise<IUser[]> {
        const findAllUsers = await this.userModel.find().exec();
        return findAllUsers;
    }


    public async findUserById(userId: string): Promise<IUser | null> {
        const getUser = await this.userModel.findById({ _id: userId });
        return getUser;
    }

    public async findUserByEmail(email: string): Promise<IUser | null> {
        const getUser = await this.userModel.findOne({ email: email });
        return getUser;
    }


}

export default userRepository;