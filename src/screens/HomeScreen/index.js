import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loaderSelector } from '../../app/selector';
import HomeContainer from './HomeContainer';

const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(loaderSelector);
    const {navigation} = props;

    const HomeContainerProps = {
        dispatch,
        isLoading,
        navigation,
    };

  return <HomeContainer {...HomeContainerProps} />;
};

export default HomeScreen;
