import { SetModalLanguageShow } from "./setters/setModalLanguageShow";

export const UpdateModalLanguageShow = value => async (dispatch) => 
    dispatch(
        SetModalLanguageShow(value)
    )
