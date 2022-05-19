import { SetModalCategory } from "./setters/setModalCategory";
import defaultState from "../../defaultState";

export const UpdateModalCategory = (status,data={}) => async (dispatch, getState) => {
    const {
        modals: {
            category
        }
    } = getState();

    dispatch(
        SetModalCategory({
            ...category,
            status,
            data : {
                ...defaultState.category.data,
                ...data
            }
        })
    )
}