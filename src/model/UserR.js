const { Schema, models ,model } = require("mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
},
    { timestamps: true }
);

const UserR = models.UserR || new model("UserR" ,userSchema);

export default UserR