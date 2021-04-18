import axios from 'axios'
export default axios.create({
    baseURL: 'https://www.googleapis.com/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})


