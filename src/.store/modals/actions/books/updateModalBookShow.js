import { SetModalBookShow } from "./setters/setModalBookShow";

export const UpdateModalBookShow = value => async (dispatch) => 
    dispatch(
        SetModalBookShow(value)
    )
