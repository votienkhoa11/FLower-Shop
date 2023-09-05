import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loaderSelector } from '../../app/selector';
import { startLoading, finishLoading } from '../../app/loaderSlice';
import HomeContainer from './HomeContainer';

const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(loaderSelector);
    console.log(isLoading);
    const {navigation} = props;

    const HomeContainerProps = {
        dispatch,
        isLoading,
        startLoading,
        finishLoading,
        navigation,
    };

  return <HomeContainer {...HomeContainerProps} />;
};

export default HomeScreen;
