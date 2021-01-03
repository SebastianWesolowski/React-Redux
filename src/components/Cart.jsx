import React from 'react';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import ProductCart from './ProductCart'
const Cart = () => {

  const cart = [
    {
      id:1,
      productName: 'Phone',
      productSrc: <PhoneIphoneIcon/>,
    },
  ]

  const handleClick = (product) => alert(`${product.productName} Click`);

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


export default Cart

