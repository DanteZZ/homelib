import { UpdateLanguage, CreateLanguage } from "../../../../.api/languages";
import { SetLanguageList } from "./setters/setLanguageList";
import { UpdateLoaded } from "../updateLoaded"

export const SaveLanguage = (newData, create=false) => async (dispatch, getState) => {
    const {
        main : {languages}
    } = getState();

    dispatch(UpdateLoaded(false));
    let newItems = null;
    if (create) {
        delete newData.id;
        const { data } = await CreateLanguage(newData);
        newItems = [...languages];
        newItems.push(data);
    } else {
        const { data } = await UpdateLanguage(newData.id,newData);
        newItems = languages.map(i => i.id == newData.id ? data : i );
    };
    dispatch(SetLanguageList(newItems))
    dispatch(UpdateLoaded(true))
}