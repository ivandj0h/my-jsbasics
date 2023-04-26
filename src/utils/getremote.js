import axios from "axios";

export default async function getRemote(url) {
    const response = await axios.get(url, {
        params: {
            _limit: 2
        }
    });
    console.log(response.data);
}