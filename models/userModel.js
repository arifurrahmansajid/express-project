const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "please add your user name"],
    },
    email: {
        type: String,
        required: [true, "please add your email address"],
        unique:[true, "Email address already taken"]
    },
    password: {
        type: String,
        required: [true, "please add the password"],
    },
},
{
    timestamps: true,
}

);

module.exports = mongoose.model("user", userSchema);