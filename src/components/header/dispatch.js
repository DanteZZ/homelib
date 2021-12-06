import { Logout } from "../../.store/user/actions/logout"

const dispatcher = dispatch => ({
    logout: () => dispatch(Logout())
})

export default dispatcher