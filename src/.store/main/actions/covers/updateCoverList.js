import { ListCover } from "../../../../.api/covers";
import { SetCoverList } from "./setters/setCoverList";
import { UpdateLoaded } from "../updateLoaded"

export const UpdateCoverList = () => async (dispatch) => {
    dispatch(UpdateLoaded(false))
    const { data } = await ListCover();
    dispatch(SetCoverList(data))
    dispatch(UpdateLoaded(true))
}