import { SetModalPublisher } from "./setters/setModalPublisher";
import defaultState from "../../defaultState";

export const UpdateModalPublisher = (status,data={}) => async (dispatch, getState) => {
    const {
        modals: {
            publisher
        }
    } = getState();

    dispatch(
        SetModalPublisher({
            ...publisher,
            status,
            data : {
                ...defaultState.publisher.data,
                ...data
            }
        })
    )
}