import { SetModalLanguage } from "./setters/setModalLanguage";
import defaultState from "../../defaultState";

export const UpdateModalLanguage = (status,data={}) => async (dispatch, getState) => {
    const {
        modals: {
            language
        }
    } = getState();

    dispatch(
        SetModalLanguage({
            ...language,
            status,
            data : {
                ...defaultState.language.data,
                ...data
            }
        })
    )
}