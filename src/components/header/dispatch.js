import { UpdateOffcanvas } from "../../.store/main/actions/updateOffcanvas"
import { Logout } from "../../.store/user/actions/logout"

const dispatcher = dispatch => ({
    logout: () => dispatch(Logout()),
    openOffcanvas: () => dispatch(UpdateOffcanvas(true))
})

export default dispatcher