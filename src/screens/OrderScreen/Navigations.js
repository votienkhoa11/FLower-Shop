/* eslint-disable react-native/no-inline-styles */
import { View, TouchableOpacity, Animated, ScrollView, Text } from 'react-native';
import React, {useState} from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';

//import style
import styles from './styles';
import { color } from '../../DefaultStyles';

import label from './label';

//import components
import All from './Components/All';
import Processing from './Components/Processing';
import Delivering from './Components/Delivering';
import Delivered from './Components/Delivered';
import Canceled from './Components/Canceled';
import LoadingScreen from '../../Components/LoadingScreen';

const Navigations = () => {
    //[bug] sometimes the app will be crashed when interacting with the tab views.
    //I tested 2 devices [both are android], one works fine, one got crashed when touching the tab views a lot.
    //If the app is still crashed when being tested in the future, I recommend change the screen to the main app navigator
    const [index, setIndex] = useState(0);

    const [routes] = useState([
        {key: 'all', title: label.all},
        {key: 'process', title: label.processing},
        {key: 'delivering', title: label.delivering},
        {key: 'delivered', title: label.delivered},
        {key: 'cancel', title: label.canceled},
    ]);

    const renderTabBar = (props) => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View style={styles.tabBarNavigation}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {props.navigationState.routes.map((route, routeIndex) => {
                        const textOpacity = props.position.interpolate({
                            inputRange,
                            outputRange: inputRange.map((inputIndex) => inputIndex === routeIndex ? 1 : 0),
                        });

                        return (
                            <View
                                style={[styles.tabViewButton]}
                                key={routeIndex}
                            >
                                <TouchableOpacity
                                    onPress={() => setIndex(routeIndex)}
                                >
                                    <Text style={{fontSize: 14}}>{route.title}</Text>
                                    <Animated.Text
                                        style={{fontSize: 14, position: 'absolute', color: color.green, opacity: textOpacity}}
                                    >
                                        {route.title}
                                    </Animated.Text>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        );
    };

    //to reduce the chance of crashed, I add render lazy, a function of tab view.
    //It will load the view more slowly only one time.
    const renderLazyHolder = () => <LoadingScreen style={{backgroundColor: color.opacity0Color}} />;

    //create a navigation using SceneMap
    const renderScence = SceneMap({
        all: All,
        process: Processing,
        delivering: Delivering,
        delivered: Delivered,
        cancel: Canceled,
    });

  return (
    <View style={{flex: 1}}>
        <TabView
            lazy
            renderLazyPlaceholder={renderLazyHolder}
            navigationState={{index, routes}}
            renderTabBar={renderTabBar}
            renderScene={renderScence}
            onIndexChange={(routeIndex) => setIndex(routeIndex)}
        />
    </View>
  );
};

export default Navigations;
