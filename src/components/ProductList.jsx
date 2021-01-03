import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';
import { connect } from 'react-redux'

const ProductList = ({ productList, cart, addProductToCart }) => {

  const handleClick = (product) => addProductToCart(product);
  const existInCart = (product) => cart.includes(product)

  return (
    <Grid container direction="row" spacing={6}>
       {productList.map((product) => (
         <Product product={product} isAvailable={existInCart(product)} onClick={() => handleClick(product)}/>
       ))}
    </Grid>

  );
};

const mapStateToProps = (state) => {
  return {
    productList: state.productList,
    cart: state.cart
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (item) => dispatch({ type: 'ADD_TO_CART', item})
  }
};

export default connect(mapStateToProps ,mapDispatchToProps)(ProductList)
