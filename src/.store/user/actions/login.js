import Cookies from 'js-cookie'
import { UpdateIsAuth } from './updateIsAuth';
import { UpdateUser } from "./updateUser"
import { showError, showMessage } from "../../../.common/notify";
import { Auth, GenToken } from '../../../.api/users';

export const Login = (username, password) => async (dispatch) => {
    try {
        const {data:{data}} = await Auth(username, password);
        const {data:{result: { token }}} = await GenToken(data.salt);
        const bearer = Buffer(token+"/"+data.salt).toString('base64');
        
        Cookies.set('JWT_TOKEN', "Bearer: "+bearer, { expires: 365 });
        dispatch(UpdateIsAuth(true));
        dispatch(UpdateUser(data));
        showMessage("Добро пожаловать!");
    } catch (e) {
        e = e?.response?.data || e;
        const error = typeof e?.errors == "string" ? e?.errors : typeof e == "string" ? e : "Непредвиденная ошибка"
        showError("Ошибка авторизации:\n"+error)
    }
    
}