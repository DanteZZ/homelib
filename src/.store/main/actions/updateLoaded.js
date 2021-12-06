import { SetLoaded } from "./setters/setLoaded";

export const UpdateLoaded = (value) => async (dispatch) => {
    dispatch(SetLoaded(value))
}