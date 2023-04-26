import getRemote from "./utils/getremote.js";
const App = async () => {
    await getRemote("https://jsonplaceholder.typicode.com/posts");
}

export default App;