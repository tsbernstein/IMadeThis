import { combineReducers } from "redux";
import users from "./users_reducer";
import products from "./products_reducer";
import reviews from './review_reducer';
import carts from './cart_reducer';

const entitiesRedcuder = combineReducers({
    users,
    products,
    reviews,
    carts
})

export default entitiesRedcuder;