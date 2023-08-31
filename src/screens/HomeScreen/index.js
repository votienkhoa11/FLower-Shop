import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import HomeContainer from './HomeContainer';
import loaderReducer from '../../app/loaderSlice';

const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(loaderReducer);
    const {navigation} = props;

    const HomeContainerProps = {
        dispatch,
        isLoading,
        navigation,
    };

  return <HomeContainer {...HomeContainerProps} />;
};

export default HomeScreen;
