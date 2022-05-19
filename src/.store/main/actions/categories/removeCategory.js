import { DeleteCategory } from "../../../../.api/categories";
import { SetCategoryList } from "./setters/setCategoryList";
import { UpdateLoaded } from "../updateLoaded"

export const RemoveCategory = (id) => async (dispatch, getState) => {
    const {
        main : {categories}
    } = getState();

    dispatch(UpdateLoaded(false));
    try {
        await DeleteCategory(id);
        dispatch(SetCategoryList(categories.filter((i)=>i.id != id)))
    } catch (e) {}
    
    dispatch(UpdateLoaded(true))
}