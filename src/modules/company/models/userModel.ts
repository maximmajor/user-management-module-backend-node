import mongoose from 'mongoose';
import { IUser } from '../interfaces/userInterface';
const userSchema = new mongoose.Schema<IUser>(
    {
        first_name: {
            type: String,
            required: true,
            trim: true,
        },
        last_name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        phone_number: {
            type: String,
            required: true,
            trim: true,
        },
        date_of_birth: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    },
);
userSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
const userModel = mongoose.model('user', userSchema);
export default userModel;