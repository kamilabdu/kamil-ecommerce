export const initialState = {
    basket: [],
    loggedinuser: null
  };
  
  export const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
            ...state,
            basket: [...state.basket, action.item]
            };
        case 'SET_LOGIN':
            return {
                ...state,
                loggedinuser: action.user
            }
        case 'REMOVE_FROM_CART':
            let newCart = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id); 
            if (index >= 0) {
                newCart.splice(index, 1);
            }else {
                console.warn(`There ware error while removing product from the cart (id: ${action.id}) as it is not in the cart`)
            }
            return {...state, basket: newCart};
    }
  };
   
  export default reducer;