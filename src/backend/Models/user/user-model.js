import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        enum: ['admin', 'customer', 'servicemen'],
        default: 'customer',
    }
}, { timestamps: true });

export const User = mongoose.model('user', userSchema);
