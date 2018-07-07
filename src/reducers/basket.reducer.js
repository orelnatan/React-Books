
function findItemIndexById(list, id){
    return list.map(function(item) {   
                    return item.id; 
                }).indexOf(id);
}

export default function(state = [], action) {

    switch(action.type){

        case 'BOOK_ADDED_TO_CART':           
            return state.concat([action.payload]);           
        break;

        case 'BOOK_REMOVED_FROM_CART':              
            let index = findItemIndexById(state, action.payload.id);
            state.splice(index, 1);

            return state;           
        break;
    }

    return state;
};