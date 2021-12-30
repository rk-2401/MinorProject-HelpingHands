import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    service_name: {
        type: String,
        required: true,
    },
    service_description: {
        type: String,
        required: true,
        minlength: 20,
    },
    price: {
        type: Number,
    },
});

export const Service = mongoose.model('service', serviceSchema);