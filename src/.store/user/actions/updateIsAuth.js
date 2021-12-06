import { LoadInfo } from "../../main/actions/loadInfo";
import { SetIsAuth } from "./setters/setIsAuth";

export const UpdateIsAuth = (value) => async (dispatch, getState) => {
    const {user: {isAuth}} = getState();
    if (value && (isAuth !== value)) {
        dispatch(LoadInfo());
    }
    dispatch(SetIsAuth(value))
}