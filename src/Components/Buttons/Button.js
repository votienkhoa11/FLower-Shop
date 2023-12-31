import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';

import styles from './styles';

const Button = ({
    disabled,
    activeOpacity = 0.7,
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
    rightIcon,
}) => {

    const container = {
        backgroundColor: backgroundColor,
        width: width,
        height: height,
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
        activeOpacity={activeOpacity}
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
