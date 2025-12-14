import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mid";

const connectDB = async () => {
	try {
		await mongoose.connect(MONGO_URI);
		console.log("MongoDB connected successfully");
	} catch (error) {
		console.error("MongoDB connection error:", error);
		throw error;
	}
};

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();    
        console.log("MongoDB disconnected successfully");
    } catch (error) {
        console.error("MongoDB disconnection error:", error);
    }
};


export { connectDB, disconnectDB };

