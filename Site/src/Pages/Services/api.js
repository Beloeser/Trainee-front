import axios from "axios" ;
const baseURL = `${import.meta.env.VIT_BACKEND_URL}` ;

const api  =axios.create({ baseURL : "http//localhost:8000/"}) ;

export default api