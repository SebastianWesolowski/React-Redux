import React from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import ProductCart from './ProductCart'
import { connect } from 'react-redux'
const Cart = ({cart, removeProductFromCart}) => {

  const handleClick = (product) => removeProductFromCart(product);

  return (
    <Paper>
      <Box width={1} minHeight={"120px"}>
        <Typography component="p" variant="h3">
          Cart
        </Typography>
      </Box>

      <Box width={"80%"} margin={"auto"}>
        <Grid container direction="column" spacing={6}>
          {cart.map((product) => (
            <ProductCart product={product} onClick={()=> handleClick(product)}/>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart
})

const mapDispatchToProps = (dispatch) => {
  return {
    removeProductFromCart: (item) => dispatch({ type: 'REMOVE_FROM_CART', item})
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart)

