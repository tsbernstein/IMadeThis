import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import productsReducer from "./products_reducer";
import reviews from './review_reducer'

const entitiesRedcuder = combineReducers({
    users: usersReducer,
    products: productsReducer,
    reviews
})

export default entitiesRedcuder;