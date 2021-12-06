import { SetUser } from "./setters/setUser";

export const UpdateUser = (value) => async (dispatch, getState) => {
    const {
        user: {
            info
        }
    } = getState();
    dispatch(SetUser({...info,...value}))
}