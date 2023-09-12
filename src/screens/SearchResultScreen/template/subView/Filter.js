/* eslint-disable react-native/no-inline-styles */
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

//import styles
import styles from '../../styles';
import { color } from '../../../../DefaultStyles';

//import icons
import Entypo from 'react-native-vector-icons/Entypo';

//import data
import label from '../../label';


const ItemCard = ({item, onPress, icon, style}) => {
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
                    {backgroundColor: selected ? color.green : color.bgLight},
                    {borderColor: selected ? color.green : color.bgMedium},
                ]}
            >
                <Text
                    style={[
                        styles.itemText,
                        {color: selected ? color.bgWhite : color.green},
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


export default function Filter(props) {
    const {
        //values
        classifyItems,
        starRatingList,
        //functions
        onPressClassifyItem,
        onPressFilter,
    } = props;

  return (
    <View style={styles.filterView}>
        <View style={styles.homeIndicatorView}>
            <View style={styles.homeIndicator} />
        </View>
        {/*classify view */}
        <View>
            <Text style={styles.label}>{label.classify}</Text>
            <View style={styles.classifyList}>
            {
                (classifyItems || []).map((classifyData, classifyIndex) => {
                    return (
                        <ItemCard
                            item={classifyData}
                            key={classifyIndex}
                        />
                    );
                })
            }
            </View>
        </View>
        <View>
            <Text style={styles.label}>{label.priceRange}</Text>
        </View>
        <View>
            <Text style={styles.label}>{label.color}</Text>
        </View>
        <View>
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
                        />
                    );
                })
            }
            </View>
        </View>
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
