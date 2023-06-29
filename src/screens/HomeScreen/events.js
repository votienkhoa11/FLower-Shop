/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import { View, FlatList, Image, Animated } from 'react-native';

//import styles
import style from './style';
import { width } from '../../styles';
import { color } from '../../styles';

import { events } from '../../database/MockData';

const FlatListEvents = () => {

    //animated values
    const scrollX = new Animated.Value(0);
    const position = Animated.divide(scrollX, width);

    //render events
    const renderEvents = ({item, index}) => {
        return (
            <View style={style.eventView}>
                <Image source={item.page} style={style.imageEvent} />
            </View>
        );
    };

    const handleScroll = () => {
        Animated.event(
            [{nativeEvent: {contentOffset: {x:scrollX}}}],
            {useNativeDriver: false},
        );
    };

     //render dots Indicators
     const renderDotsIndicators = () => {
        
    };

    return (
        <View style={{marginVertical: 24}}>
            {/*Event page
            check if there is an event, show the event, if not, do not show anything*/}
            <FlatList
                data={events ? events : null}
                horizontal
                renderItem={renderEvents}
                keyExtractor={(item, index) => {return item.id;}}
                showsHorizontalScrollIndicator={false}
                decelerationRate={0.2}
                snapToInterval={width}
                bounces={true}
                pagingEnabled={true}

                onScroll={handleScroll}
            />
            <View style={style.dotView}>
                {events.map((dot, index) => {
                    let opacity = position.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.2, 1, 0.2],
                        extrapolate: 'clamp',
                    });

                    return (
                        <Animated.View style={{
                            backgroundColor: color.greenLight,
                            width: 8,
                            height: 8,
                            borderRadius: 5,
                            marginHorizontal: 2,
                            opacity,
                        }} />
                    );
                })}
            </View>
        </View>
    );
};

export default FlatListEvents;
