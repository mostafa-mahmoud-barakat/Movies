import axios from 'axios';

 const axiosInstance=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
        api_key:"1d7d43f50e26c4e6b3447850bcb32ee0",
        // page:"1",
    }
})
export default axiosInstance;