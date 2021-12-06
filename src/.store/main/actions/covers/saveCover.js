import { UpdateCover, CreateCover } from "../../../../.api/covers";
import { SetCoverList } from "./setters/setCoverList";
import { UpdateLoaded } from "../updateLoaded"

export const SaveCover = (newData, create=false) => async (dispatch, getState) => {
    const {
        main : {covers}
    } = getState();

    dispatch(UpdateLoaded(false));
    let newItems = null;
    if (create) {
        delete newData.id;
        const { data } = await CreateCover(newData);
        newItems = [...covers];
        newItems.push(data);
    } else {
        const { data } = await UpdateCover(newData.id,newData);
        newItems = covers.map(i => i.id == newData.id ? data : i );
    };
    dispatch(SetCoverList(newItems))
    dispatch(UpdateLoaded(true))
}