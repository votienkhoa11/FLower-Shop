/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';

import styles from '../../styles';

import label from '../../label';

const CollapseView = ({ children }) => {

    const [collapsed, setCollapsed] = useState(true);
  return (
    <>
        <Collapsible
            collapsed={collapsed}
            maxHeight={400}
            style={{width: '100%', paddingHorizontal: 16}}
        >
            {children}
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
