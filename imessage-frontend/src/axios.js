  
import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://imessage-backnd.herokuapp.com/'
})

export default instance