import mongoose, { Mongoose } from 'mongoose';

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        addressLine1: {
            type: String,
            required: true,
        },
        addressLine2: {
            type: String,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        pinCode: {
            type: Number,
            required: true,
        },
    },
    contact: {
        primary: {
            type: Number,
            unique: true,
            required: true,
        },
        alternate: {
            type: Number,
            unique: true,
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
});

export const Admin = mongoose.model('admin', adminSchema);