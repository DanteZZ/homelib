import Cookies from 'js-cookie'
import { UpdateIsAuth } from './updateIsAuth';

export const Logout = () => async (dispatch) => {
    Cookies.set('JWT_TOKEN', null)
    dispatch(UpdateIsAuth(false));
}