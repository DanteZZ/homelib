import { UpdateModalBookShow } from "../../../.store/modals/actions/books/updateModalBookShow"
import { UpdateModalBookParam } from "../../../.store/modals/actions/books/updateModalBookParam"
import { SaveBook } from "../../../.store/main/actions/books/saveBook.js"
import { RemoveBook } from "../../../.store/main/actions/books/removeBook.js"

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
    },
    remove: (id) => {
        dispatch(RemoveBook(id))
    }
})

export default dispatcher