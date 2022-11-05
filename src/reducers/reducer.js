export const initialState = {
    Basket:[],
    User:null
};

const reducer = (state,action) =>
{
    switch(action.type)
    {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                Basket:[...state.Basket,action.item]
            }
        case 'REMOVE_FROM_BASKET':
           const index =  state.Basket.findIndex((item) =>
            {
                return item.id === action.id
            });

            let newBasket = [ ...state.Basket ];

            if(index >= 0)
            {
                newBasket.splice(index,1)
            }
            else
            {
                console.warn(`You cannot remove the product (id:${action.id})`)
            }
            return {
                ...state,
                Basket:newBasket
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                Basket:[]
            }
        case 'SET_USER':
            return {
                ...state,
                User:action.user
            }   
        default:
            return state;
    }
};

export default reducer;