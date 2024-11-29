import api from "./api"


//Usuarios
export async function GetUsers(){
    const {data} = api.get( `/usuarios`) 
return data 
}


export async function CreateUsers(body){
    const {data} = api.post( `/usuarios` , body) 
return data
}

export async function UpdateUsers(id , body){
    const {data} = api.put(`/usuarios:${id}` , body) 
return data
}

export async function DeleteUsers(id){
    const {data} = api.get( `/usuarios:${id}`) 
return data}