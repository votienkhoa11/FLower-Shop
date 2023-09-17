import { View, ActivityIndicator, StatusBar } from 'react-native';
import React from 'react';

//import styles
import defaultStyles from '../DefaultStyles';
import { color } from '../values/color';

const LoadingScreen = ({style}) => {
  return (
    <View style={[defaultStyles.loadingContainer, style]}>
      <StatusBar translucent backgroundColor="transparent" barstyles="dark-content" />
      <ActivityIndicator size={'large'} color={color.green} />
    </View>
  );
};

export default LoadingScreen;
