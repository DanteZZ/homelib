import { UpdatePublisher, CreatePublisher } from "../../../../.api/publishers";
import { SetPublisherList } from "./setters/setPublisherList";
import { UpdateLoaded } from "../updateLoaded"

export const SavePublisher = (newData, create=false) => async (dispatch, getState) => {
    const {
        main : {publishers}
    } = getState();

    dispatch(UpdateLoaded(false));
    let newItems = null;
    if (create) {
        delete newData.id;
        const { data } = await CreatePublisher(newData);
        newItems = [...publishers];
        newItems.push(data);
    } else {
        const { data } = await UpdatePublisher(newData.id,newData);
        newItems = publishers.map(i => i.id == newData.id ? data : i );
    };
    dispatch(SetPublisherList(newItems))
    dispatch(UpdateLoaded(true))
}