import React from 'react';
import HomeContainer from './HomeContainer';

const HomeScreen = ({navigation}) => {
    const HomeContainerProps = {
        navigation,
    };

  return <HomeContainer {...HomeContainerProps} />;
};

export default HomeScreen;
