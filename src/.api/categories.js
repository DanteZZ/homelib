import axios from "axios"
import { api } from "./config"
import Cookies from 'js-cookie'

export const ListCategory = async () => await axios.get(
    api + "/categories/list",
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
)

export const CreateCategory = async (data) => await axios.post( 
    api+"/categories/create", 
    data, 
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
    )

export const UpdateCategory = async (id,data) => await axios.post( 
    api+"/categories/update/"+id, 
    data, 
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
    )

export const RemoveCategory = async (id) => await axios.delete( 
    api+"/categories/delete/"+id, 
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
)