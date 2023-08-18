/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';

import styles from '../../styles';

import label from '../../label';

const CollapseView = ({ children }) => {
    const [collapsed, setCollapsed] = useState(true);
    const [currentHeight, setCurrentHeight] = useState(0);

    const collapsedHeight = 400;

    const onLayOut = event => {
        const newHeight = event.nativeEvent.layout.height;

        // Don't do anything for height = 400 (collapsed state)
        if (newHeight === collapsedHeight) {return;}

        // Only toggle key if the height has changed
        if (newHeight !== currentHeight) {
            setCurrentHeight(newHeight);
        }
    };

  return (
    <>
        <Collapsible
            collapsed={collapsed}
            collapsedHeight={collapsedHeight}
            key={currentHeight}
            style={{width: '100%', paddingHorizontal: 16}}
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
            </View>
        </TouchableOpacity>
    </>
  );
};

export default CollapseView;
