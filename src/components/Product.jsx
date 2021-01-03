import React from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
const Product = ({ product, isAvailable, onClick }) => {

  return (
    <Grid item key={`Product-list-item-${product.id}`}>
      <Typography component="p" variant="subtitle1">
        {product.productSrc}
      </Typography>
     <Box padding={"5px"}>{product.productName}</Box>
     <Button disabled={isAvailable} variant={'outlined'} onClick={onClick}>Add {product.productName.toLowerCase()} to cart</Button>
    </Grid>
  );
};

export default Product
