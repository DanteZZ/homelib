import { SetModalExternal } from "./setters/setModalExternal";
import { FindExternal } from "../../../../.api/external";
import { showError } from "../../../../.common/notify";

export const SearchExternal = (query) => async (dispatch, getState) => {
    const {
        modals: {
            external
        }
    } = getState();

    dispatch(
        SetModalExternal({
            ...external,
            loading: true
        })
    )

    try {
        const { data } = await FindExternal(query);
        dispatch(
            SetModalExternal({
                ...external,
                list: data.map(l=>({...l,results:l.results.filter(i=>i.author && i.image)})),
                loading:false
            })
        )
    } catch {
        showError("Ошибка при поиске")
    }
    
}