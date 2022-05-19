import { UpdateModalLanguageShow } from "../../../.store/modals/actions/languages/updateModalLanguageShow"
import { UpdateModalLanguageParam } from "../../../.store/modals/actions/languages/updateModalLanguageParam"
import { SaveLanguage } from "../../../.store/main/actions/languages/saveLanguage.js"
import { RemoveLanguage } from "../../../.store/main/actions/languages/removeLanguage.js"

const dispatcher = dispatch => ({
    updateParam: (param,value) => {
        dispatch(UpdateModalLanguageParam(param,value))
    },
    closeModal: () => {
        dispatch(UpdateModalLanguageShow(false))
    },
    save: (data) => {
        dispatch(SaveLanguage(data))
    },
    create: (data) => {
        dispatch(SaveLanguage(data,true))
    },
    remove: (id) => {
        dispatch(RemoveLanguage(id))
    }
})

export default dispatcher