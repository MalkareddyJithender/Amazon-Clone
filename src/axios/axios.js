import axios from 'axios';

const port = process.env.PORT || 3000;

const url =  port===3000 ? 'http://localhost:3000':'http://amazon-clone55.herokuapp.com'

const instance = axios.create({
    baseURL:url //The API(cloud function) URL = http://localhost:5001/clone-4f49b/us-central1/api
});

export default instance;