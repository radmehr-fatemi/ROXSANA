const { default: mongoose } = require("mongoose")

const connectDB = async () => {
    if (mongoose.connections[0].readyState) return
    await mongoose.connect(process.env.MONOGO_URI);
    console.log("Connected to DB")
}

export default connectDB