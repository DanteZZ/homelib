import { ListPublisher } from "../../../../.api/publishers";
import { SetPublisherList } from "./setters/setPublisherList";
import { UpdateLoaded } from "../updateLoaded"

export const UpdatePublisherList = () => async (dispatch) => {
    dispatch(UpdateLoaded(false))
    const { data } = await ListPublisher();
    dispatch(SetPublisherList(data))
    dispatch(UpdateLoaded(true))
}