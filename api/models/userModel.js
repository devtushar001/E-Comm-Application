import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'email already taken']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    address: {
        type: String,
        required: [true, 'address is required']
    },
    city: {
        type: String,
        required: [true, 'city should be required']
    },
    country: {
        type: String,
        required: [true, 'Contry should be required']
    },
    phone: {
        type: String,
        required: [true, 'phone should be required']
    },
    profilePic: {
        type: String,
    }
}, { timestamps: true });

// hashpassword function

userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10);
})

const userModel = mongoose.model('User', userSchema);

export default userModel;