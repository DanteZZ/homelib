import axios from "axios"
import { api } from "./config"
import Cookies from 'js-cookie'

export const FindExternal = async (query) => await axios.post(
    api + "/external/search",
    {query},
    { headers:{Authorization: Cookies.get("JWT_TOKEN")} }
)