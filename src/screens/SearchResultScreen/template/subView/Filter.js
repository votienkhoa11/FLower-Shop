/* eslint-disable react-native/no-inline-styles */
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

//import styles
import styles from '../../styles';
import { color } from '../../../../values/color';

//import icons
import Feather from 'react-native-vector-icons/Feather';

//import data
import label from '../../label';

//import components
import ItemCard from './ItemCard';
import Button from '../../../../Components/Buttons/Button';

const ClassifyItem = ({item, onPress}) => {
    const [selected, setSelected] = useState(false);
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
                onPress && onPress();
                setSelected(!selected);
            }}
        >
            <ItemCard
                item={item}
                style={{
                    backgroundColor: selected ? color.green : color.bgLight,
                    borderColor: selected ? color.green : color.bgMedium,
                }}
                textStyle={{
                    color: selected ? color.bgWhite : color.green,
                }}
            />
        </TouchableOpacity>
    );
};

const CustomMarker = () => {
    return (
        <View style={styles.circle} />
    );
};

const CustomLabel = (props) => {
    const {
        oneMarkerValue,
        twoMarkerValue,
        oneMarkerLeftPosition,
        twoMarkerLeftPosition,
      } = props;

    return (
        <View style={{position: 'absolute'}}>
            { oneMarkerValue !== 0 &&

                <View style={[
                    styles.labelPriceView,
                    {
                        left: oneMarkerLeftPosition - 50 / 2,
                        position: 'absolute',
                    },
                ]}>
                    <Text>{oneMarkerValue}</Text>
                </View>
            }

            {   twoMarkerValue !== 2000000 &&
                <View style={[
                    styles.labelPriceView,
                    {left: twoMarkerLeftPosition - 50 / 2},
                ]}>
                    <Text>{twoMarkerValue}</Text>
                </View>
            }
        </View>
    );
};

const ColorCard = ({item, onPress}) => {
    const [selected, setSelected] = useState(false);

    return (
        <TouchableOpacity
            onPress={() => {
                onPress();
                setSelected(!selected);
            }}
        >
            <View style={styles.colorCard}>
                <View style={[
                    styles.checkView,
                    {borderColor: selected ? color.green : color.bgWhite},
                ]}>
                    <View style={[
                        styles.circleColor,
                        {backgroundColor: item.color},
                    ]}/>
                    { selected &&
                        <Feather name="check" style={styles.checkIcon} />
                    }
                </View>
                <Text style={{color: color.mediumBlack}}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const RatingItem = ({item, ratingFilter, onPress}) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => onPress && onPress()}
        >
            <ItemCard
                item={item}
                icon={true}
                style={{
                    backgroundColor: item === ratingFilter ? color.green : color.bgLight,
                    borderColor: item === ratingFilter ? color.green : color.bgMedium,
                }}
                textStyle={{
                    color: item === ratingFilter ? color.bgWhite : color.mediumBlack,
                }}
                iconStyle={{
                    color: item === ratingFilter ? color.bgWhite : color.yellow,
                }}
            />
        </TouchableOpacity>
    );
};

export default function Filter(props) {
    const {
        //values
        classifyItems,
        starRatingList,
        colorList,
        filterValue,
        //functions
        onPressClassifyItem,
        onChangePriceRange,
        onTouchColor,
        onTouchRating,
        onPressSaveFilterValue,
    } = props;

  return (
    <View style={styles.filterView}>
        <View style={styles.homeIndicatorView}>
            <View style={styles.homeIndicator} />
        </View>
        {/*classify view */}
        <View style={{marginBottom: 8}}>
            <Text style={styles.label}>{label.classify}</Text>
            <View style={styles.classifyList}>
            {
                (classifyItems || []).map((classifyData, classifyIndex) => {
                    return (
                        <ClassifyItem
                            item={classifyData}
                            key={classifyIndex}
                            onPress={() => onPressClassifyItem(classifyData)}
                        />
                    );
                })
            }
            </View>
        </View>
        {/*Price range view */}
        <View style={{marginBottom: 8}}>
            <Text style={styles.label}>{label.priceRange}</Text>
            <View style={styles.sliderView}>
                <MultiSlider
                    values={[500000, 1500000]}
                    onValuesChange={onChangePriceRange}
                    sliderLength={300}
                    min={0}
                    max={2000000}
                    snapped
                    enableLabel
                    customLabel={CustomLabel}
                    customMarker={CustomMarker}
                    step={10000}
                    markerSize={20}
                />
            </View>
            <View style={styles.sliderLabel}>
                <Text>0</Text>
                <Text style={styles.priceText}>2.000.000</Text>
            </View>
        </View>
        {/*Color choose view */}
        <View>
            <Text style={styles.label}>{label.color}</Text>
            <FlatList
                data={colorList}
                scrollEnabled={false}
                renderItem={({item, index}) => (
                    <ColorCard
                        item={item}
                        key={index}
                        onPress={() => onTouchColor(item.name)}
                    />
                )}
                keyExtractor={(item, index) => String(index)}
                numColumns={2}
            />
        </View>
        {/*Rating view*/}
        <View style={{marginBottom: 8}}>
            <Text style={styles.label}>{label.rating}</Text>
            <View style={[styles.classifyList, {gap: 4, paddingLeft: 8}]}>
            {
                (starRatingList || []).map((ratingData, ratingIndex) => {
                    return (
                        <RatingItem
                            item={ratingData}
                            ratingFilter={filterValue.starRating}
                            key={ratingIndex}
                            onPress={() => onTouchRating(ratingData)}
                        />
                    );
                })
            }
            </View>
        </View>
        <Button
            onPress={() => onPressSaveFilterValue()}
            text={label.done}
            fontSize={16}
            fontWeight="500"
            textColor={color.bgWhite}
            textStyle={{paddingVertical: 12}}
            backgroundColor={color.green}
            style={{borderRadius: 8}}
        />
    </View>
  );
}
