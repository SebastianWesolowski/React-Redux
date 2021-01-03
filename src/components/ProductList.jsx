import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';

const ProductList = () => {

  const productList = [
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

  const handleClick = (product) => alert(`${product.productName} Click`);

  return (
    <Grid container direction="row" spacing={6}>
       {productList.map((product) => (
         <Product product={product} onClick={() => handleClick(product)}/>
       ))}
    </Grid>

  );
};

export default ProductList
