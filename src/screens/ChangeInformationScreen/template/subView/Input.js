/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput } from 'react-native';
import React from 'react';

//import styles
import styles from '../../styles';
import { color } from '../../../../values/color';

//import icon
import Entypo from 'react-native-vector-icons/Entypo';

const Input = ({
    onChangeText,
    value,
    placeholder,
    labelName,
    error,
    editable,
    autoCapitalize,
    keyboardType,
    style,
}) => {
  return (
    <View style={{padding: 8}}>
        <View style={[
            styles.input,
            {borderColor: error ? color.red : color.lightDark},
        ]}>
            <TextInput
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                editable={editable}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                style={[{width: '95%', color: color.black}, style]}
            />
            {   labelName === 'Ngày sinh' ?
                    <Entypo name="calendar" style={styles.inputIcon} />
                : null
            }
        </View>
        <View style={styles.labelInput}>
            <Text style={styles.labelText}>{labelName}</Text>
            <Text style={styles.starText}>*</Text>
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default Input;
