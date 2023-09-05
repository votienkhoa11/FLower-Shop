import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loaderSelector, productSelector } from '../../app/selector';
import { startLoading, finishLoading } from '../../app/loaderSlice';
import HomeContainer from './HomeContainer';

const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(loaderSelector);
    const productsList = useSelector(productSelector);
    const {navigation} = props;

    const HomeContainerProps = {
        dispatch,
        isLoading,
        productsList,
        startLoading,
        finishLoading,
        navigation,
    };

  return <HomeContainer {...HomeContainerProps} />;
};

export default HomeScreen;
