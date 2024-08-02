import mongoose from "mongoose";
import dotenv from "dotenv";
import config from "../config/config";
dotenv.config();

const connect = () => mongoose.connect(config.db.URI);

export default connect;
