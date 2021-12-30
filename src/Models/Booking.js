import mongoose, { Mongoose } from 'mongoose';

const bookingSchema = new mongoose.Schema({
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    booking_date: {
        type: Date,
        default: Date.UTC(),
    },
    servicing_date: {
        type: Date,
    },
    feedback: {
        type: String,
    },
    status: {
        type: String,
        enum: ['PENDING', 'COMPLETED', 'CANCELLED'],
        default: "PENDING",
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'service'
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer',
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employee',
    },
}, { timestamps: true });

export const Booking = mongoose.model('booking', bookingSchema);