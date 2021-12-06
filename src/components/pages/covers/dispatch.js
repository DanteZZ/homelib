import { UpdateModalCoverShow } from "../../../.store/modals/actions/covers/updateModalCoverShow"
import { UpdateModalCover } from "../../../.store/modals/actions/covers/updateModalCover"
import { MODAL_CREATE, MODAL_EDIT } from "../../../.store/modals/actions/constants"

const dispatcher = dispatch => ({
    openCover: (data) => {
        dispatch(UpdateModalCover(MODAL_EDIT, data))
        dispatch(UpdateModalCoverShow(true))
    },
    createCover: () => {
        dispatch(UpdateModalCover(MODAL_CREATE))
        dispatch(UpdateModalCoverShow(true))
    }
})

export default dispatcher