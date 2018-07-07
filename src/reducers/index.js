import {combineReducers} from 'redux';
import BooksReducer from './books.reducer.js';
import BasketReducer from './basket.reducer.js';
import ShopReducer from './shop.reducer.js';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    books: BooksReducer,
    basket: BasketReducer,
    shop: ShopReducer,
});

export default allReducers