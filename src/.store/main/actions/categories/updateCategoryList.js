import { ListCategory } from "../../../../.api/categories";
import { SetCategoryList } from "./setters/setCategoryList";
import { UpdateLoaded } from "../updateLoaded"

export const UpdateCategoryList = () => async (dispatch) => {
    dispatch(UpdateLoaded(false))
    const { data } = await ListCategory();
    dispatch(SetCategoryList(data))
    dispatch(UpdateLoaded(true))
}