import axios from "axios"
import { api } from "./config"
import Cookies from 'js-cookie'

export const ListLanguage = async () => await axios.get(
    api + "/languages/list",
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
)

export const CreateLanguage = async (data) => await axios.post( 
    api+"/languages/create", 
    data, 
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
    )

export const UpdateLanguage = async (id,data) => await axios.post( 
    api+"/languages/update/"+id, 
    data, 
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
    )

export const RemoveLanguage = async (id) => await axios.delete( 
    api+"/languages/delete/"+id, 
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
)