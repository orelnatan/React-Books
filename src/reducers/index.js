import {combineReducers} from 'redux';
import BooksReducer from './books.reducer.js';
import CartReducer from './cart.reducer';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    books: BooksReducer,
    cart: CartReducer,
});

export default allReducers