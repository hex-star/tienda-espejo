import React from 'react';
import ProductCard from './ProductCard';
import { Grid } from '@material-ui/core';
import productMakerList from './ProductList.js';

const Content = () => {

    const getProductMakerCard = (productMakerObj) => {
        return (
            <Grid item xs={12} sm={4}>
                <ProductCard {...productMakerObj} />
            </Grid>
        );
    };


    return (

    <Grid container spacing = {2} >
        {productMakerList.map(productMakerObj => getProductMakerCard(productMakerObj))}
    </Grid>
        
    );
};

export default Content;