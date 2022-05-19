import { DeletePublisher } from "../../../../.api/publishers";
import { SetPublisherList } from "./setters/setPublisherList";
import { UpdateLoaded } from "../updateLoaded"

export const RemovePublisher = (id) => async (dispatch, getState) => {
    const {
        main : {publishers}
    } = getState();

    dispatch(UpdateLoaded(false));
    try {
        await DeletePublisher(id);
        dispatch(SetPublisherList(publishers.filter((i)=>i.id != id)))
    } catch (e) {}
    
    dispatch(UpdateLoaded(true))
}