import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from './styles';

const Button = ({
    disabled,
    text,
    textStyle,
    textColor,
    fontSize,
    fontWeight,
    style,
    height,
    width,
    borderWidth,
    borderColor,
    backgroundColor,
    onPress,
    leftIcon,
    leftIconStyle,
    rightIcon,
    rightIconStyle,
}) => {

    const container = {
        backgroundColor: backgroundColor,
        width: width ? width : '100%',
        height: height ? height : 40,
        borderWidth: borderWidth,
        borderColor: borderWidth ? borderColor : null,
    };

    const textCommonStyle = {
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: textColor,
    };

  return (
    <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        activeOpacity={0.7}
    >
        <View style={[styles.buttonContainer, container, style]}>
            {leftIcon && leftIcon}
            {text && <Text style={[textCommonStyle, textStyle]}>{text}</Text>}
            {rightIcon && rightIcon}
        </View>
    </TouchableOpacity>
  );
};

export default Button;
