import { View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import styles from './styles';

const TextInputComponent = ({
    placeholder,
    style,
    keyBoardType,
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
}) => (
    <View>
        <View style={[styles.containerAreaInput, style]}>
            {   leftIcon &&
                <TouchableOpacity
                    onPress={() => onPressleftIcon && onPressleftIcon}
                >
                    {leftIcon}
                </TouchableOpacity>
            }
            <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                keyboardType={keyBoardType}
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
    </View>
);

export default TextInputComponent;
