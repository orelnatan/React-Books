

export default function(state = [], action) {

    switch(action.type){

        case 'BOOK_ADDED_TO_CART':          
            return state.concat([action.payload]);           
        break;

        case 'BOOK_REMOVED_FROM_CART':          
            let index = state.findIndex(item => item.id == action.payload.id);         
            let newState = state.slice();
            newState.splice(index, 1);
            return newState;           
        break;
    }

    return state;
};