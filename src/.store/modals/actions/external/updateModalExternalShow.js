import { SetModalExternalShow } from "./setters/setModalExternalShow";

export const UpdateModalExternalShow = value => async (dispatch) => 
    dispatch(
        SetModalExternalShow(value)
    )
