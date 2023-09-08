import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loaderSelector } from '../../app/selector';
import ProductContainer from './ProductContainer';

const ProdcuctScreen = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(loaderSelector);
    const {route, navigation} = props;
    const {params} = route;

    const productContainer = {
        dispatch,
        isLoading,
        params,
        navigation,
    };

  return <ProductContainer {...productContainer}/>;
};

export default ProdcuctScreen;
