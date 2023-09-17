/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';

import styles from '../../styles';
import { color } from '../../../../values/color';

import AntDesign from 'react-native-vector-icons/AntDesign';

import label from '../../label';

const CollapseView = ({ children, collapsedHeight }) => {
    const [collapsed, setCollapsed] = useState(true);
    const [currentHeight, setCurrentHeight] = useState(0);

    const onLayOut = (event) => {
        const {x, y, height, width} = event.nativeEvent.layout;

        setCurrentHeight(height + 20);
    };

  return (
    <>
        <Collapsible
            collapsed={collapsed}
            collapsedHeight={collapsedHeight}
            style={{width: '100%', paddingHorizontal: 16, height: currentHeight}}
        >
            <View onLayout={onLayOut}>
                {children}
            </View>
        </Collapsible>
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
