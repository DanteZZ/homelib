import { SetModalCover } from "./setters/setModalCover";
import defaultState from "../../defaultState";

export const UpdateModalCover = (status,data={}) => async (dispatch, getState) => {
    const {
        modals: {
            cover
        }
    } = getState();

    dispatch(
        SetModalCover({
            ...cover,
            status,
            data : {
                ...defaultState.cover.data,
                ...data
            }
        })
    )
}