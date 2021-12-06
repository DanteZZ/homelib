import { UpdateBook } from "../../../../.api/books";
import { SetBookList } from "./setters/setBookList";
import { UpdateLoaded } from "./../updateLoaded"

export const SaveBook = (newData, create=false) => async (dispatch, getState) => {
    const {
        main : {books}
    } = getState();

    dispatch(UpdateLoaded(false));
    let newBooks = null;
    if (create) {
        const { data } = await CreateBook(newData);
        newBooks = [...books];
        newBooks.push(data);
    } else {
        const { data } = await UpdateBook(newData.id,newData);
        console.log(data);
        newBooks = books.map(i => i.id == newData.id ? data : i );
        console.log(newBooks);
    };
    dispatch(SetBookList(newBooks))
    dispatch(UpdateLoaded(true))
}