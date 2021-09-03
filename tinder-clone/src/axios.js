import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-clonebackendapp.herokuapp.com",
})

export default instance