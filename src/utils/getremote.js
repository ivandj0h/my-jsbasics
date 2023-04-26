import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const REMOTE_URL = process.env.REMOTE_URL;

export default async function getRemote() {
    const response = await axios.get(REMOTE_URL, {
        params: {
            _limit: 2
        }
    });
    console.log(response.data);
}