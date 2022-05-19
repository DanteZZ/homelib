import { DeleteLanguage } from "../../../../.api/languages";
import { SetLanguageList } from "./setters/setLanguageList";
import { UpdateLoaded } from "../updateLoaded"

export const RemoveLanguage = (id) => async (dispatch, getState) => {
    const {
        main : {languages}
    } = getState();

    dispatch(UpdateLoaded(false));
    try {
        await DeleteLanguage(id);
        dispatch(SetLanguageList(languages.filter((i)=>i.id != id)))
    } catch (e) {}
    
    dispatch(UpdateLoaded(true))
}