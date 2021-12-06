import { checkIsAuth } from "../../.store/user/actions/checkIsAuth"

const dispatcher = dispatch => ({
    checkIsAuth: () => dispatch(checkIsAuth())
})

export default dispatcher