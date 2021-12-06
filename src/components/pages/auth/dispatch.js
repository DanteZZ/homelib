import { Login } from "../../../.store/user/actions/login"

const dispatcher = dispatch => ({
    login: (username,password) => dispatch(Login(username,password))
})

export default dispatcher