import mongoose from 'mongooose';

const employeeSchema = new mongoose.Schema({
    emp_name: {
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
    identification: {
        aadhar_card: {
            type: String,
            required: true,
            unique: true
        },
    }
}, { timestamps: true });

export const Employee = mongoose.model('employee', employeeSchema);