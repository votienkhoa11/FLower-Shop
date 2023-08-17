import React from 'react';
import ChangeInformationContainer from './ChangeInformationContainer';

const ChangeInformationScreen = ({navigation}) => {
    const changeInformationContainer = {
        navigation,
    };

  return <ChangeInformationContainer {...changeInformationContainer} />;
};

export default ChangeInformationScreen;
