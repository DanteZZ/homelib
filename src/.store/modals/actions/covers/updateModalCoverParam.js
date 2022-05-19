import { SetModalCover } from "./setters/setModalCover";

export const UpdateModalCoverParam = (param,value) => async (dispatch, getState) => {
    const {
        modals: {
            cover
        }
    } = getState();
    dispatch(
        SetModalCover({
            ...cover,
            data : {
                ...cover.data,
                [param]: value
            }
        })
    )
}