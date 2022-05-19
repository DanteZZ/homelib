import { SetModalBook } from "./setters/setModalBook";
import defaultState from "../../defaultState";

export const UpdateModalBook = (status,data={}) => async (dispatch, getState) => {
    const {
        modals: {
            book
        }
    } = getState();

    dispatch(
        SetModalBook({
            ...book,
            status,
            data : {
                ...defaultState.book.data,
                ...data
            }
        })
    )
}