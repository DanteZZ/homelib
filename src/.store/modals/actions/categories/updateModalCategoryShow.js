import { SetModalCategoryShow } from "./setters/setModalCategoryShow";

export const UpdateModalCategoryShow = value => async (dispatch) => 
    dispatch(
        SetModalCategoryShow(value)
    )
