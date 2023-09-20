import { View, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import styles from './styles';
import { color } from '../../values/color';

const TextInputComponent = ({
    placeholder,
    style,
    textInputStyle,
    keyboardType,
    autoCapitalize,
    value,
    onChangeText,
    onBlur,
    secureTextEntry,
    onFocus,
    editable,
    returnKeyType,
    onSubmitEditing,
    leftIcon,
    onPressleftIcon,
    rightIcon,
    onPressRightIcon,
    error,
}) => (
    <View>
        <View style={[
            styles.containerAreaInput,
            style,
            error && {borderColor: error ? color.red : color.lightDark},
        ]}>
            {   leftIcon &&
                <TouchableOpacity
                    activeOpacity={0}
                    onPress={() => onPressleftIcon && onPressleftIcon()}
                >
                    {leftIcon}
                </TouchableOpacity>
            }
            <TextInput
                style={[styles.textInput, textInputStyle]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
                onBlur={onBlur}
                onFocus={onFocus}
                onSubmitEditing={onSubmitEditing}
                editable={editable}
                secureTextEntry={secureTextEntry}
                returnKeyType={returnKeyType}
            />
            {   rightIcon &&
                <TouchableOpacity
                    onPress={() => onPressRightIcon && onPressRightIcon()}
                >
                    {rightIcon}
                </TouchableOpacity>
            }
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
);

export default TextInputComponent;
