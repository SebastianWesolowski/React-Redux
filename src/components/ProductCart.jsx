import React from 'react';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';

const ProductCart = ({product, onClick}) => {
  return (
    <Grid item xs key={`Cart-item-product.id`}>
      <Paper variant={'outlined'}>
        <Box padding={"10px"}>
          <Box display={"flex"} padding={"5px"}>
            <Typography component="p" variant="subtitle1">
              {product.productSrc}
            </Typography>
            <Box padding={"5px"}>{product.productName}</Box>
          </Box>
          <Box display={"flex"}>
            <Button variant={'outlined'} onClick={onClick}>Remove {product.productName.toLowerCase()} from cart</Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ProductCart
