import { combineReducers } from "redux";
import usersReducer from "./users_reducer";

const entitiesRedcuder = combineReducers({
    users: usersReducer
})

export default entitiesRedcuder;