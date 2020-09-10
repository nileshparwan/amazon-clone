export const initialState = {
    basket: []
};

// selector
export const getBasketTotal = (basket) => basket?.reduce((total, curr) => curr.price + total, 0);

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // this will find the first item and return it to you
            const index = state.basket.findIndex(
                basketItem => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                //item found
                newBasket.splice(index, 1); //remove item by index(id of item), 1: remove only one 
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`);
            }
            return { ...state, basket: newBasket };
        default:
            return state;
    }
};

export default reducer;   