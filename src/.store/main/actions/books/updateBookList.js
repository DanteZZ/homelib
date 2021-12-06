import { ListBook } from "../../../../.api/books";
import { SetBookList } from "./setters/setBookList";
import { UpdateLoaded } from "./../updateLoaded"

export const UpdateBookList = () => async (dispatch) => {
    dispatch(UpdateLoaded(false))
    const { data } = await ListBook();
    dispatch(SetBookList(data))
    dispatch(UpdateLoaded(true))
}