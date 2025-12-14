import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import StudentRoutes from "./routes/StudentRoutes";

import { connectDB } from "./config/db";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors())


app.use('/api/students', StudentRoutes )


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
export default app;

