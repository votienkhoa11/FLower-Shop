/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';

//import styles
import styles from '../../styles';

//import data
import label from '../../label';

const Filter = () => {
  return (
    <View style={styles.filterView}>
        <View style={styles.homeIndicatorView}>
            <View style={styles.homeIndicator} />
        </View>
        <View>
            <Text style={styles.label}>{label.classify}</Text>
        </View>
        <View>
            <Text style={styles.label}>{label.priceRange}</Text>
        </View>
        <View>
            <Text style={styles.label}>{label.color}</Text>
        </View>
        <View>
            <Text style={styles.label}>{label.rating}</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TouchableOpacity>
                <View style={styles.doneButton}>
                    <Text style={styles.doneText}>{label.done}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default Filter;
