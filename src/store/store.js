import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';

const initialCart = [];

const initialProductList = [
  {
    id:1,
    productName: 'Phone',
    productSrc: <PhoneIphoneIcon/>,
  },
  {
    id:2,
    productName: 'Tablet',
    productSrc: <TabletMacIcon/>,
  },
  {
    id:3,
    productName: 'Laptop',
    productSrc: <LaptopMacIcon/>,
  },
]

function cart(state = initialCart, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [
        ...state, action.item
      ]
    default:
      return state;
  }
}

function productList(state = initialProductList, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const reducers = combineReducers(
  {
    productList,
    cart,
  }
)

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));

export default store
