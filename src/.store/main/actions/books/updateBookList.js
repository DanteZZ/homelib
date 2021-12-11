import { ListBook } from "../../../../.api/books";
import { SetBookList } from "./setters/setBookList";
import { UpdateLoaded } from "./../updateLoaded"
import { updateAddictions } from "../updateAddictions";

export const UpdateBookList = () => async (dispatch) => {
    dispatch(UpdateLoaded(false))
    const { data } = await ListBook()
    dispatch(SetBookList(data))
    dispatch(updateAddictions())
    dispatch(UpdateLoaded(true))
}