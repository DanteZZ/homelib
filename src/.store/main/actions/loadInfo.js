import { UpdateBookList } from "./books/updateBookList";
import { UpdateCoverList } from "./covers/updateCoverList";
import { UpdateCategoryList } from "./categories/updateCategoryList";
import { UpdateLanguageList } from "./languages/updateLanguageList";
import { UpdatePublisherList } from "./publishers/updatePublisherList";
export const LoadInfo = () => async (dispatch) => {
    dispatch(UpdateBookList());
    dispatch(UpdatePublisherList());
    dispatch(UpdateLanguageList());
    dispatch(UpdateCategoryList());
    dispatch(UpdateCoverList());
}