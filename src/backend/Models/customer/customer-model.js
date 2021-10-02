import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        addressLine1: String,
        addressLine2: String,
        city: String,
        State: String,
        PinCode: Number,
    },
    mobile: [Number]
});

export const Customer = mongoose.model('customer', customerSchema);