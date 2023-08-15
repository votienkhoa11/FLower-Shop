/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';

//import styles
import styles from './styles';
import { color } from '../../DefaultStyles';

//import icon
import AntDesign from 'react-native-vector-icons/AntDesign';

const DropDownInput = ({
    onSelectedText,
    data,
    placeholder,
    labelName,
    error,
}) => {
  return (
    <View style={{paddingVertical: 8}}>
        <View style={{paddingHorizontal: 8, flexDirection: 'row'}}>

            <SelectDropdown
                data={data}
                defaultButtonText={placeholder}
                onSelect={onSelectedText}
                //styles
                dropdownOverlayColor="rgba(0,0,0,0)"
                buttonStyle={[
                    styles.input,
                    {borderColor: error ? color.red : color.lightDark},
                ]}
                dropdownStyle={styles.dropDown}
                buttonTextStyle={styles.buttonText}
                rowStyle={styles.row}
                rowTextStyle={[styles.buttonText, {textAlign: 'center'}]}
            />
            <AntDesign name="down" style={styles.downIcon} />
        </View>
        <View style={styles.labelInput}>
            <Text style={styles.labelText}>{labelName}</Text>
            <Text style={styles.starText}>*</Text>
        </View>
        {error ? <Text style={[styles.errorText, {marginLeft: 8}]}>{error}</Text> : null}
    </View>
  );
};

export default DropDownInput;
