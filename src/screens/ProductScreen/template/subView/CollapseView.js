/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
        const animatedHeight = collapsed ? withTiming(height) : withTiming(300);
        return {
            height: animatedHeight,
        };
    });
    //style={{width: '100%', paddingHorizontal: 16, height: currentHeight}}
  return (
    <>
        <Animated.View style={[animatedStyle, {overflow: 'hidden'}]}>
            <View
                onLayout={onLayOut}
                style={{position: 'absolute'}}
            >
                {children}
            </View>
        </Animated.View>
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => setCollapsed(!collapsed)}
        >
            <View style={styles.collapseButton}>
                {collapsed ?
                    <Text style={styles.collapseText}>{label.viewMore}</Text>
                    :
                    <Text style={styles.collapseText}>{label.collapse}</Text>
                }
                <AntDesign name={collapsed ? 'caretdown' : 'caretup'} size={8} color={color.green} />
            </View>
        </TouchableOpacity>
    </>
  );
};

export default CollapseView;
