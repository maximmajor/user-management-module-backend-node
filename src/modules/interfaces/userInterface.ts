import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    phone_number: string,
    date_of_birth: string,
}
export default IUser