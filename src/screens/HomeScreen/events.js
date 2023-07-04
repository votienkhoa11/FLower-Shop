/* eslint-disable react/no-unstable-nested-components*/
/* eslint-disable react/react-in-jsx-scope*/
/* eslint-disable react-native/no-inline-styles */
import { View, FlatList, Image, Animated } from 'react-native';
import React, { useRef } from 'react';

//import styles
import style from './style';
import { width } from '../../styles';

import { events } from '../../database/MockData';

const FlatListEvents = () => {

    //animated values
    const scrollX = useRef(new Animated.Value(0)).current;
    const position = Animated.divide(scrollX, width);

    //render events
    const renderEvents = ({item, index}) => {
        return (
            <View style={style.eventView}>
                <Image source={item.page} style={style.imageEvent} />
            </View>
        );
    };

    const handleScroll = event => {
        Animated.event(
            [{nativeEvent: {contentOffset: {x:scrollX}}}],
            {useNativeDriver: false},
        )(event);
    };

     //render dots Indicators
     //BUG: Warning: Each child in a list should have a unique "key" prop.
     const renderDotsIndicators = () => {
        return events.map((dot, index) => {
            const dotWidth = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [8, 16, 8],
                extrapolate: 'clamp',
            });
            const opacity = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0.2, 1, 0.2],
                extrapolate: 'clamp',
            });

            return (
                <Animated.View style={[style.dotIndicators, {width: dotWidth, opacity}]} />
            );
        });
    };

    return (
        <View style={{paddingLeft: 16}}>
            {/*Event page*/}
            <FlatList
                data={events ? events : null}
                horizontal
                renderItem={renderEvents}
                keyExtractor={(item, index) => {return item.id;}}
                showsHorizontalScrollIndicator={false}
                decelerationRate={0.5}
                snapToInterval={width}
                bounces={true}
                pagingEnabled={true}
                onScroll={handleScroll}

            />
            <View style={style.dotView}>
                {renderDotsIndicators()}
            </View>
        </View>
    );
};

export default FlatListEvents;
