import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

interface CustomConnectOptions extends ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI! || 'mongodb+srv://koyonation:Oyok1234567oyoK@cluster0.tv7vs.mongodb.net/fulfil-v1?retryWrites=true&w=majority', {
    } as CustomConnectOptions);
    console.log('Connected to database');
  } catch (error: any) {
    console.error(`Error connecting to database: ${error.message}`);
    process.exit(1);
  }
};