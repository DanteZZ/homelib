import { UpdateBook, CreateBook } from "../../../../.api/books";
import { SetBookList } from "./setters/setBookList";
import { UpdateLoaded } from "./../updateLoaded"

export const SaveBook = (newData, create=false) => async (dispatch, getState) => {
    const {
        main : {books}
    } = getState();

    dispatch(UpdateLoaded(false));
    let newBooks = null;
    if (create) {
        delete newData.id;
        delete newData.handovered;
        const { data } = await CreateBook(newData);
        newBooks = [...books];
        newBooks.push(data);
    } else {
        const { data } = await UpdateBook(newData.id,newData);
        newBooks = books.map(i => i.id == newData.id ? data : i );
    };
    dispatch(SetBookList(newBooks))
    dispatch(UpdateLoaded(true))
}