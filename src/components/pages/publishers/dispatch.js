import { UpdateModalPublisherShow } from "../../../.store/modals/actions/publishers/updateModalPublisherShow"
import { UpdateModalPublisher } from "../../../.store/modals/actions/publishers/updateModalPublisher"
import { MODAL_CREATE, MODAL_EDIT } from "../../../.store/modals/actions/constants"

const dispatcher = dispatch => ({
    openPublisher: (data) => {
        dispatch(UpdateModalPublisher(MODAL_EDIT, data))
        dispatch(UpdateModalPublisherShow(true))
    },
    createPublisher: () => {
        dispatch(UpdateModalPublisher(MODAL_CREATE))
        dispatch(UpdateModalPublisherShow(true))
    }
})

export default dispatcher