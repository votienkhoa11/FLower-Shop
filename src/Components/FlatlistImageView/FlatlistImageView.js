import { View, FlatList, Image, Animated } from 'react-native';
import React, { useRef } from 'react';

//import styles
import { styles } from './FlatlistImageView.styles';
import { width } from '../../DefaultStyles';
import { color } from '../../values/color';

const FlatlistImageView = ({imageData, imageStyle, dotStyle, isInside}) => {

    //animated values
    const scrollX = useRef(new Animated.Value(0)).current;
    const position = Animated.divide(scrollX, width);

    //flatlist value

    //render events
    const renderImage = ({item, index}) => {
        return (
            <View style={[styles.imageView, imageStyle]}>
                <Image source={item.image ? item.image : item} style={styles.image} />
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
        return imageData.map((dot, dotIndicatorsIndex) => {
            const dotWidth = position.interpolate({
                inputRange: [dotIndicatorsIndex - 1, dotIndicatorsIndex, dotIndicatorsIndex + 1],
                outputRange: [8, 16, 8],
                extrapolate: 'clamp',
            });

            const opacity = isInside ? 1 : (
                position.interpolate({
                inputRange: [dotIndicatorsIndex - 1, dotIndicatorsIndex, dotIndicatorsIndex + 1],
                outputRange: [0.2, 1, 0.2],
                extrapolate: 'clamp',
            }));

            const inactiveColor = isInside ? color.lightDark : color.green;
            const dotColor = position.interpolate({
                inputRange: [dotIndicatorsIndex - 1, dotIndicatorsIndex, dotIndicatorsIndex + 1],
                outputRange: [inactiveColor, color.green, inactiveColor],
                extrapolate: 'clamp',
            });
            return (
                <Animated.View
                    key={dotIndicatorsIndex}
                    style={[
                        styles.dotIndicators,
                        {
                            width: dotWidth,
                            opacity,
                            backgroundColor: dotColor,
                        },
                    ]}
                />
            );
        });
    };

    return (
        imageData ?
        <View>
            {/*Event page*/}
            <FlatList
                data={imageData}
                horizontal
                renderItem={renderImage}
                showsHorizontalScrollIndicator={false}
                decelerationRate={0.5}
                snapToInterval={width}
                bounces={true}
                pagingEnabled={true}
                onScroll={handleScroll}
            />
            <View style={[styles.dotView, dotStyle]}>
                {renderDotsIndicators()}
            </View>
        </View>
        : null
    );
};

export default FlatlistImageView;
