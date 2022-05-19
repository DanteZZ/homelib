import { UpdateOffcanvas } from "../../.store/main/actions/updateOffcanvas"

const dispatcher = dispatch => ({
    closeOffcanvas: () =>dispatch(UpdateOffcanvas(false))
})

export default dispatcher