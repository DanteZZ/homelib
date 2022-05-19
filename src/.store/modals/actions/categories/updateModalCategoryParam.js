import { SetModalCategory } from "./setters/setModalCategory";

export const UpdateModalCategoryParam = (param,value) => async (dispatch, getState) => {
    const {
        modals: {
            category
        }
    } = getState();
    dispatch(
        SetModalCategory({
            ...category,
            data : {
                ...category.data,
                [param]: value
            }
        })
    )
}