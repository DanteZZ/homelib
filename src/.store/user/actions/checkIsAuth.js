import Cookies from 'js-cookie'

import { GetInfo } from '../../../.api/users';
import { UpdateLoaded } from '../../main/actions/updateLoaded';
import { UpdateIsAuth } from './updateIsAuth';
import { UpdateUser } from './updateUser';

export const checkIsAuth = () => async (dispatch) => {
    const token = Cookies.get('JWT_TOKEN') || null;
    let auth = false;
    if (token) {
        try {
            const {data} = await GetInfo();
            dispatch(UpdateUser(data));
            auth = true;
        } catch {
            auth = false;
        }
    };
    dispatch(UpdateIsAuth(auth));
    dispatch(UpdateLoaded(true));
}