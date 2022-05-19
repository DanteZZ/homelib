import { SetModalLanguage } from "./setters/setModalLanguage";

export const UpdateModalLanguageParam = (param,value) => async (dispatch, getState) => {
    const {
        modals: {
            language
        }
    } = getState();
    dispatch(
        SetModalLanguage({
            ...language,
            data : {
                ...language.data,
                [param]: value
            }
        })
    )
}