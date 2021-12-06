import { UpdateModalBookShow } from "../../../.store/modals/actions/updateModalBookShow"
import { UpdateModalBook } from "../../../.store/modals/actions/updateModalBook"
import { MODAL_CREATE, MODAL_EDIT } from "../../../.store/modals/actions/constants"

const dispatcher = dispatch => ({
    openBook: (data) => {
        dispatch(UpdateModalBook(MODAL_EDIT, data))
        dispatch(UpdateModalBookShow(true))
    },
    createBook: () => {
        dispatch(UpdateModalBook(MODAL_CREATE))
        dispatch(UpdateModalBookShow(true))
    }
})

export default dispatcher