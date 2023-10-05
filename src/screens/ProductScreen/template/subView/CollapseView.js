/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import Button from '../../../../Components/Buttons/Button';
import React, {useState} from 'react';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import styles from '../../styles';
import { color } from '../../../../values/color';

import AntDesign from 'react-native-vector-icons/AntDesign';

import label from '../../label';

const CollapseView = ({ children }) => {
    const [collapsed, setCollapsed] = useState(true);
    const [height, setHeight] = useState(0);

    const onLayOut = (event) => {
        const layoutHeight = event.nativeEvent.layout.height;

        if (layoutHeight > 0 && layoutHeight !== height) {
            setHeight(layoutHeight);
        }
    };

    const animatedStyle = useAnimatedStyle(() => {
        const animatedHeight = collapsed ? withTiming(300) : withTiming(height);
        return {
            height: animatedHeight,
        };
    });
  return (
    <>
        <Animated.View style={[animatedStyle, {overflow: 'hidden'}]}>
            <View
                onLayout={onLayOut}
                style={styles.collapseView}
            >
                {children}
            </View>
        </Animated.View>
        <Button
            onPress={() => setCollapsed(!collapsed)}
            text={collapsed ? label.viewMore : label.collapse}
            fontSize={16}
            fontWeight="500"
            textColor={color.green}
            rightIcon={<AntDesign name={collapsed ? 'caretdown' : 'caretup'} size={8} color={color.green} />}
            height={48}
            width="100%"
            borderWidth={0.3}
            borderColor={color.bgMedium}
            style={styles.collapseButton}
            activeOpacity={1}
        />
    </>
  );
};

export default CollapseView;
