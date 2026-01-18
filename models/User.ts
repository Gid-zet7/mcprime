import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
    email: string;
    passwordHash: string; // Ensure to hash passwords before saving (e.g. bcrypt)
    role: 'admin' | 'user';
    createdAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
    {
        email: {
            type: String,
            required: [true, 'Please provide an email'],
            unique: true,
        },
        passwordHash: {
            type: String,
            required: [true, 'Please provide a password'],
        },
        role: {
            type: String,
            enum: ['admin', 'user'],
            default: 'admin', // Default to admin for this specific app
        },
    },
    {
        timestamps: true,
    }
);

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
