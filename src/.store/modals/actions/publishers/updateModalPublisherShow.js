import { SetModalPublisherShow } from "./setters/setModalPublisherShow";

export const UpdateModalPublisherShow = value => async (dispatch) => 
    dispatch(
        SetModalPublisherShow(value)
    )
