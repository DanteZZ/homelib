import { UpdateModalLanguageShow } from "../../../.store/modals/actions/languages/updateModalLanguageShow"
import { UpdateModalLanguage } from "../../../.store/modals/actions/languages/updateModalLanguage"
import { MODAL_CREATE, MODAL_EDIT } from "../../../.store/modals/actions/constants"

const dispatcher = dispatch => ({
    openLanguage: (data) => {
        dispatch(UpdateModalLanguage(MODAL_EDIT, data))
        dispatch(UpdateModalLanguageShow(true))
    },
    createLanguage: () => {
        dispatch(UpdateModalLanguage(MODAL_CREATE))
        dispatch(UpdateModalLanguageShow(true))
    }
})

export default dispatcher