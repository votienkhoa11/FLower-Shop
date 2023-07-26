import { View, ActivityIndicator, StatusBar } from 'react-native';
import React from 'react';

//import styles
import defaultStyles from '../../DefaultStyles';
import { color } from '../../DefaultStyles';

const LoadingScreen = () => {
  return (
    <View style={defaultStyles.loadingContainer}>
      <StatusBar translucent backgroundColor="transparent" barstyles="dark-content" />
      <ActivityIndicator size={'large'} color={color.green} />
    </View>
  );
};

export default LoadingScreen;
