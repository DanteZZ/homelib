import axios from "axios"
import { api } from "./config"
import Cookies from 'js-cookie'

export const ListBook = async () => await axios.get(
    api + "/books/list",
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
)

export const CreateBook = async (data) => await axios.post( 
    api+"/books/create", 
    data, 
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
    )

export const UpdateBook = async (id,data) => await axios.post( 
    api+"/books/update/"+id, 
    data, 
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
    )

export const RemoveBook = async (id) => await axios.delete( 
    api+"/books/delete/"+id, 
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
)