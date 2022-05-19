import axios from "axios"
import { api } from "./config"
import Cookies from 'js-cookie'

export const ListCover = async () => await axios.get(
    api + "/covers/list",
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
)

export const CreateCover = async (data) => await axios.post( 
    api+"/covers/create", 
    data, 
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
    )

export const UpdateCover = async (id,data) => await axios.post( 
    api+"/covers/update/"+id, 
    data, 
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
    )

export const DeleteCover = async (id) => await axios.delete( 
    api+"/covers/delete/"+id, 
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
)