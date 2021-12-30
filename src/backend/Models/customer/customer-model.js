import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
});

export const Customer = mongoose.model('customer', customerSchema);