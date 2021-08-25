import { OPEN_MODAL } from "../actions/modal_actions";

export default function modalInfoReducer(state = null, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return action.modalInfo;
        default:
            return state;
    }
}