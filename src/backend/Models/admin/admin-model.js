import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: [Number],
        required: true,
    }
});

export const Admin = mongoose.model('admin', adminSchema);