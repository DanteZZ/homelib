import { UpdateModalCoverShow } from "../../../.store/modals/actions/covers/updateModalCoverShow"
import { UpdateModalCoverParam } from "../../../.store/modals/actions/covers/updateModalCoverParam"
import { SaveCover } from "../../../.store/main/actions/covers/saveCover.js"
import { RemoveCover } from "../../../.store/main/actions/covers/removeCover.js"

const dispatcher = dispatch => ({
    updateParam: (param,value) => {
        dispatch(UpdateModalCoverParam(param,value))
    },
    closeModal: () => {
        dispatch(UpdateModalCoverShow(false))
    },
    save: (data) => {
        dispatch(SaveCover(data))
    },
    create: (data) => {
        dispatch(SaveCover(data,true))
    },
    remove: (id) => {
        dispatch(RemoveCover(id))
    }
})

export default dispatcher