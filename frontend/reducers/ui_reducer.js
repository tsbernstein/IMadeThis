import { combineReducers } from "redux";

import modal from './modal_reducer'
import modalInfo from "./modal_info_reducer";

export default combineReducers({
    modal,
    modalInfo
});