import { SetModalCoverShow } from "./setters/setModalCoverShow";

export const UpdateModalCoverShow = value => async (dispatch) => 
    dispatch(
        SetModalCoverShow(value)
    )
