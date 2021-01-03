import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  cart:[]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return{
        ...state, cart: [...state.cart, action.item]
      }
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

export default store
