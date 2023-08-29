import { View, Text } from 'react-native';
import React from 'react';
import label from '../../label';

//import icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../../styles';
import { color } from '../../../../DefaultStyles';

const EmtyData = () => {
  return (
    <View style={styles.emptyView}>
        <MaterialCommunityIcons name="flask-empty-outline" size={64} color={color.lightDark} />
        <Text style={styles.noResult}>{label.noResult}</Text>
    </View>
  );
};

export default EmtyData;
