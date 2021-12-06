import { UpdateModalCategoryShow } from "../../../.store/modals/actions/categories/updateModalCategoryShow"
import { UpdateModalCategory } from "../../../.store/modals/actions/categories/updateModalCategory"
import { MODAL_CREATE, MODAL_EDIT } from "../../../.store/modals/actions/constants"

const dispatcher = dispatch => ({
    openCategory: (data) => {
        dispatch(UpdateModalCategory(MODAL_EDIT, data))
        dispatch(UpdateModalCategoryShow(true))
    },
    createCategory: () => {
        dispatch(UpdateModalCategory(MODAL_CREATE))
        dispatch(UpdateModalCategoryShow(true))
    }
})

export default dispatcher