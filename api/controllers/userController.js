import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, address, city, country, phone } = req.body;

        if (!name || !email || !password || !address || !city || !country || !phone) {
            return res.status(505).send({
                success: false,
                message: 'please provide all fields'
            })
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(500).send({
                success: false,
                message: `Email ${email} Allready Exist!`
            })
        }

        // console.log(name);
        // console.log(email);
        // console.log(password);
        // console.log(city);
        // console.log(country);
        // console.log(phone);

        // const userModel = await User.create();
        const user = await userModel.create({ name, email, password, address, city, country, phone });
        res.status(201).send({
            success: true,
            message: 'user created successfully'
        })
    } catch (error) {
        res.status(501).send({
            success: false,
            message: "error in register api",
            error
        })
        console.log(error);
    }
}

// loging controller 

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        // validation
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: "Email or Password is Required."
            })
        }

        // check user
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(500).send({
                success: false,
                message: "User Not Found"
            })
        }

        // check password 
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(404).send({
                success: false,
                message: "Invalid Credential."
            })
        }

        res.status(200).send({
            success: true,
            message: "User Logined Successfully",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error In Login!",
            error
        })
    }
}