import React from 'react';
import ProductList  from './components/ProductList';
import Cart  from './components/Cart';
import { Box, Grid } from '@material-ui/core';

function App() {
  return (
    <div className="App">
        <Box display={"flex"} width={"80%"} margin={"auto"} padding={"30px"}>
          <Grid container direction="row" justify={'space-between'} spacing={6}>
            <Grid item xs={7}>
              <ProductList/>
            </Grid>
            <Grid item xs={5}>
              <Cart/>
            </Grid>
          </Grid>
        </Box>
    </div>
  );
}

export default App;
