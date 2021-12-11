import { DeleteBook } from "../../../../.api/books";
import { SetBookList } from "./setters/setBookList";
import { UpdateLoaded } from "./../updateLoaded"
import { updateAddictions } from "../updateAddictions";

export const RemoveBook = (id) => async (dispatch, getState) => {
    const {
        main : {books}
    } = getState();

    dispatch(UpdateLoaded(false));
    try {
        await DeleteBook(id);
        dispatch(SetBookList(books.filter((i)=>i.id != id)))
    } catch (e) {}
    dispatch(updateAddictions())
    dispatch(UpdateLoaded(true))
}