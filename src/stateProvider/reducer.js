export const initialState = {
    basket: []
};

// selector
export const getBasketTotal = (basket) => basket?.reduce((total, curr) => curr.price + total, 0);

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        default:
            return state;
    }
};

export default reducer;   