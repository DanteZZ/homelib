import { UpdateModalExternalShow } from "../../../.store/modals/actions/external/updateModalExternalShow"
import { UpdateModalBookShow } from "../../../.store/modals/actions/books/updateModalBookShow"
import { SearchExternal } from "../../../.store/modals/actions/external/searchExternal"
import { UpdateModalBookParam } from "../../../.store/modals/actions/books/updateModalBookParam"

const dispatcher = dispatch => ({
    closeModal: () => {
        dispatch(UpdateModalExternalShow(false))
    },
    search: (query) => dispatch(SearchExternal(query)),
    updateOpenBook: (data) => {
        dispatch(UpdateModalBookParam("name",data.name));
        dispatch(UpdateModalBookParam("price",data.price));
        dispatch(UpdateModalBookParam("author",data.author));
        dispatch(UpdateModalBookParam("image",data.image));
        dispatch(UpdateModalBookShow(false));
        dispatch(UpdateModalBookShow(true));
        dispatch(UpdateModalExternalShow(false));
    }
})

export default dispatcher