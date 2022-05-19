import { UpdateModalCategoryShow } from "../../../.store/modals/actions/categories/updateModalCategoryShow"
import { UpdateModalCategoryParam } from "../../../.store/modals/actions/categories/updateModalCategoryParam"
import { SaveCategory } from "../../../.store/main/actions/categories/saveCategory.js"
import { RemoveCategory } from "../../../.store/main/actions/categories/removeCategory.js"

const dispatcher = dispatch => ({
    updateParam: (param,value) => {
        dispatch(UpdateModalCategoryParam(param,value))
    },
    closeModal: () => {
        dispatch(UpdateModalCategoryShow(false))
    },
    save: (data) => {
        dispatch(SaveCategory(data))
    },
    create: (data) => {
        dispatch(SaveCategory(data,true))
    },
    remove: (id) => {
        dispatch(RemoveCategory(id))
    }
})

export default dispatcher