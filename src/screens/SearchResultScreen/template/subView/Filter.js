/* eslint-disable react-native/no-inline-styles */
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

//import styles
import styles from '../../styles';
import { color } from '../../../../DefaultStyles';

//import icons
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

//import data
import label from '../../label';

const ItemCard = ({item, onPress, icon, fontColor}) => {
    const [selected, SetSelected] = useState(false);

    return (
        item &&
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
                SetSelected(!selected);
            }}
        >
            <View style={[
                    styles.itemCard,
                    {
                        backgroundColor: selected ? color.green : color.bgLight,
                        borderColor: selected ? color.green : color.bgMedium,
                        paddingVertical: icon ? 4 : 8,
                    },
                ]}
            >
                <Text
                    style={[
                        styles.itemText,
                        {color: selected ? color.bgWhite : fontColor},
                    ]}
                >{item}</Text>
                {
                    icon &&
                    <Entypo
                        name="star"
                        style={[
                            styles.starIcon,
                            {color: selected ? color.bgWhite : color.yellow},
                        ]}
                    />
                }
            </View>
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
            <View style={[
                styles.labelPriceView,
                {
                    left: oneMarkerLeftPosition - 50 / 2,
                    position: 'absolute',
                },
            ]}>
                <Text>{oneMarkerValue}</Text>
            </View>
            <View style={[
                styles.labelPriceView,
                {left: twoMarkerLeftPosition - 50 / 2},
            ]}>
                <Text>{twoMarkerValue}</Text>
            </View>
        </View>
    );
};

const ColorCard = ({item}) => {
    const [selected, setSelected] = useState(false);

    return (
        <TouchableOpacity
            onPress={() => setSelected(!selected)}
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

export default function Filter(props) {
    const {
        //values
        classifyItems,
        starRatingList,
        priceRangeValue,
        colorList,
        //functions
        onPressClassifyItem,
        onPressFilter,
        onChangePriceRange,
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
                        <ItemCard
                            item={classifyData}
                            key={classifyIndex}
                            fontColor={color.green}
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
                    values={[priceRangeValue[0], priceRangeValue[1]]}
                    onValuesChange={onChangePriceRange}
                    sliderLength={300}
                    min={0}
                    max={2000000}
                    allowOverlap
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
                        <ItemCard
                            item={ratingData}
                            key={ratingIndex}
                            icon={true}
                            style={styles.ratingItem}
                            fontColor={color.mediumBlack}
                        />
                    );
                })
            }
            </View>
        </View>
        {/*Button view */}
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TouchableOpacity
                onPress={() => onPressFilter()}
            >
                <View style={styles.doneButton}>
                    <Text style={styles.doneText}>{label.done}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
}
