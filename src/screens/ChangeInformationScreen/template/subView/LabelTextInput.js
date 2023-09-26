import { View, Text } from 'react-native';
import React from 'react';
import styles from '../../styles';

const LabelTextInput = ({labelText}) => {
    return (
        <View style={styles.labelInput}>
            <Text style={styles.labelText}>{labelText}</Text>
            <Text style={styles.starText}>*</Text>
        </View>
    );
};

export default LabelTextInput;
