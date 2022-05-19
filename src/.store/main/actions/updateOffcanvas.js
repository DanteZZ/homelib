import { SetOffcanvas } from "./setters/setOffcanvas";

export const UpdateOffcanvas = (value) => async (dispatch) => {
    dispatch(SetOffcanvas(value))
}