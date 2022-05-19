import { UpdateCategory, CreateCategory } from "../../../../.api/categories";
import { SetCategoryList } from "./setters/setCategoryList";
import { UpdateLoaded } from "../updateLoaded"

export const SaveCategory = (newData, create=false) => async (dispatch, getState) => {
    const {
        main : {categories}
    } = getState();

    dispatch(UpdateLoaded(false));
    let newItems = null;
    if (create) {
        delete newData.id;
        const { data } = await CreateCategory(newData);
        newItems = [...categories];
        newItems.push(data);
    } else {
        const { data } = await UpdateCategory(newData.id,newData);
        newItems = categories.map(i => i.id == newData.id ? data : i );
    };
    dispatch(SetCategoryList(newItems))
    dispatch(UpdateLoaded(true))
}