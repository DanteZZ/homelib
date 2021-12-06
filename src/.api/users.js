import axios from "axios"
import { api } from "./config"
import Cookies from 'js-cookie'

export const Auth = async (username, password) => await axios.post( api + "/users/auth",
    {
        username,
        password
    }
)

export const GenToken = async (salt) => await axios.post( api + "/token/gen",{salt})

export const GetInfo = async () => await axios.get( api+"/users/me/info", { headers:{Authorization: Cookies.get("JWT_TOKEN")} })