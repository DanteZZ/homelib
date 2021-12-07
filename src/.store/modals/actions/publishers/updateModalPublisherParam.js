import { SetModalPublisher } from "./setters/setModalPublisher";

export const UpdateModalPublisherParam = (param,value) => async (dispatch, getState) => {
    const {
        modals: {
            publisher
        }
    } = getState();
    dispatch(
        SetModalPublisher({
            ...publisher,
            data : {
                ...publisher.data,
                [param]: value
            }
        })
    )
}