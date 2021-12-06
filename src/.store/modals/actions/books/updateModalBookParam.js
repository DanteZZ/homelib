import { SetModalBook } from "./setters/setModalBook";

export const UpdateModalBookParam = (param,value) => async (dispatch, getState) => {
    const {
        modals: {
            book
        }
    } = getState();
    dispatch(
        SetModalBook({
            ...book,
            data : {
                ...book.data,
                [param]: value
            }
        })
    )
}