import axios from "axios"
import { api } from "./config"
import Cookies from 'js-cookie'

export const ListPublisher = async () => await axios.get(
    api + "/publishers/list",
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
)

export const CreatePublisher = async (data) => await axios.post( 
    api+"/publishers/create", 
    data, 
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
    )

export const UpdatePublisher = async (id,data) => await axios.post( 
    api+"/publishers/update/"+id, 
    data, 
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
    )

export const DeletePublisher = async (id) => await axios.delete( 
    api+"/publishers/delete/"+id, 
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
)