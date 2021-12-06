import { ListLanguage } from "../../../../.api/languages";
import { SetLanguageList } from "./setters/setLanguageList";
import { UpdateLoaded } from "../updateLoaded"

export const UpdateLanguageList = () => async (dispatch) => {
    dispatch(UpdateLoaded(false))
    const { data } = await ListLanguage();
    dispatch(SetLanguageList(data))
    dispatch(UpdateLoaded(true))
}