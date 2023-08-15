/* eslint-disable react-native/no-inline-styles */
import { View, FlatList, Image, Animated } from 'react-native';
import React, { useRef } from 'react';

//import styles
import styles from '../../styles';
import { width } from '../../../../DefaultStyles';

import { events } from '../../../../database/MockData';

const FlatListEvents = () => {

    //animated values
    const scrollX = useRef(new Animated.Value(0)).current;
    const position = Animated.divide(scrollX, width);

    //flatlist value

    //render events
    const renderEvents = ({item, index}) => {
        return (
            <View style={styles.eventView}>
                <Image source={item.image} style={styles.imageEvent} />
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
     const renderDotsIndicators = () => {
        return events.map((dot, dotIndicatorsIndex) => {
            const dotWidth = position.interpolate({
                inputRange: [dotIndicatorsIndex - 1, dotIndicatorsIndex, dotIndicatorsIndex + 1],
                outputRange: [8, 16, 8],
                extrapolate: 'clamp',
            });
            const opacity = position.interpolate({
                inputRange: [dotIndicatorsIndex - 1, dotIndicatorsIndex, dotIndicatorsIndex + 1],
                outputRange: [0.2, 1, 0.2],
                extrapolate: 'clamp',
            });
            return (
                <Animated.View
                    key={dotIndicatorsIndex}
                    style={[styles.dotIndicators, {width: dotWidth, opacity}]}
                />
            );
        });
    };

    return (
        events ?
        <View style={{paddingLeft: 16}}>
            {/*Event page*/}
            <FlatList
                data={events}
                horizontal
                renderItem={renderEvents}
                showsHorizontalScrollIndicator={false}
                decelerationRate={0.5}
                snapToInterval={width}
                bounces={true}
                pagingEnabled={true}
                onScroll={handleScroll}
            />
            <View style={styles.dotView}>
                {renderDotsIndicators()}
            </View>
        </View>
        : null
    );
};

export default FlatListEvents;
