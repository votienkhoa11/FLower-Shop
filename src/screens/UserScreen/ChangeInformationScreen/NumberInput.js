/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';

import PhoneInput from 'react-native-phone-number-input';

import styles from './styles';
import { color } from '../../../DefaultStyles';

const NumberInput = ({
    onChangeText,
    placeholder,
    label,
    value,
    error,
}) => {
  return (
    <View style={{padding: 8}}>
        <PhoneInput
            onChangeFormattedText={onChangeText}
            defaultValue={value}
            defaultCode="VN"
            layout="second"
            placeholder={placeholder}
            filterProps

            //styles
            containerStyle={[
                styles.input,
                {
                    borderColor: error ? color.red : color.lightDark,
                    width: '100%',
                    alignItems: 'center',
                },
            ]}
            textContainerStyle={styles.numberInput}
            codeTextStyle={styles.codePhoneText}
            countryPickerButtonStyle={styles.codePhoneContainer}
            flagButtonStyle={styles.dropButton}

        />
        <View style={styles.labelInput}>
            <Text style={styles.labelText}>{label}</Text>
            <Text style={styles.starText}>*</Text>
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default NumberInput;
