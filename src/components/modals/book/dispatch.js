import { UpdateModalBookShow } from "../../../.store/modals/actions/updateModalBookShow"
import { UpdateModalBookParam } from "../../../.store/modals/actions/updateModalBookParam"
import { SaveBook } from "../../../.store/main/actions/books/saveBook.js"

const dispatcher = dispatch => ({
    updateParam: (param,value) => {
        dispatch(UpdateModalBookParam(param,value))
    },
    closeModal: () => {
        dispatch(UpdateModalBookShow(false))
    },
    save: (data) => {
        dispatch(SaveBook(data))
    },
    create: (data) => {
        dispatch(SaveBook(data,true))
    }
})

export default dispatcher