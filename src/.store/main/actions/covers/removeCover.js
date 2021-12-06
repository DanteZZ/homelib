import { DeleteCover } from "../../../../.api/covers";
import { SetCoverList } from "./setters/setCoverList";
import { UpdateLoaded } from "../updateLoaded"

export const RemoveCover = (id) => async (dispatch, getState) => {
    const {
        main : {covers}
    } = getState();

    dispatch(UpdateLoaded(false));
    try {
        await DeleteCover(id);
        dispatch(SetCoverList(covers.filter((i)=>i.id != id)))
    } catch (e) {}
    
    dispatch(UpdateLoaded(true))
}