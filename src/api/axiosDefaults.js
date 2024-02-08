import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-project-09507283eb85.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true