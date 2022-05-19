import { UpdateModalPublisherShow } from "../../../.store/modals/actions/publishers/updateModalPublisherShow"
import { UpdateModalPublisherParam } from "../../../.store/modals/actions/publishers/updateModalPublisherParam"
import { SavePublisher } from "../../../.store/main/actions/publishers/savePublisher.js"
import { RemovePublisher } from "../../../.store/main/actions/publishers/removePublisher.js"

const dispatcher = dispatch => ({
    updateParam: (param,value) => {
        dispatch(UpdateModalPublisherParam(param,value))
    },
    closeModal: () => {
        dispatch(UpdateModalPublisherShow(false))
    },
    save: (data) => {
        dispatch(SavePublisher(data))
    },
    create: (data) => {
        dispatch(SavePublisher(data,true))
    },
    remove: (id) => {
        dispatch(RemovePublisher(id))
    }
})

export default dispatcher