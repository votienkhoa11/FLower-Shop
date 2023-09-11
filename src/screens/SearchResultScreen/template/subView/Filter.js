/* eslint-disable react-native/no-inline-styles */
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

//import styles
import styles from '../../styles';
import { color } from '../../../../DefaultStyles';

//import data
import label from '../../label';


const ItemCard = ({item, onPress}) => {
    const [selected, SetSelected] = useState(false);

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
                SetSelected(!selected);
            }}
        >
            <View style={[
                    styles.itemCard,
                    {backgroundColor: selected ? color.green : color.bgLight},
                ]}
            >
                <Text
                    style={[
                        styles.itemText,
                        {color: selected ? color.bgWhite : color.green},
                    ]}
                >{item}</Text>
            </View>
        </TouchableOpacity>
    );
};


export default function Filter(props) {
    const {
        //values
        classifyItems,
        //functions
        onPressClassifyItem,
    } = props;

  return (
    <View style={styles.filterView}>
        <View style={styles.homeIndicatorView}>
            <View style={styles.homeIndicator} />
        </View>
        {/*classify view */}
        <View>
            <Text style={styles.label}>{label.classify}</Text>
            <FlatList
                data={classifyItems}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                renderItem={({item, index}) => (
                    <ItemCard item={item} key={index} onPress={() => onPressClassifyItem()} />
                )
                }
                keyExtractor={({item, index}) => index}
                contentContainerStyle={styles.classifyList}
            />
        </View>
        <View>
            <Text style={styles.label}>{label.priceRange}</Text>
        </View>
        <View>
            <Text style={styles.label}>{label.color}</Text>
        </View>
        <View>
            <Text style={styles.label}>{label.rating}</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TouchableOpacity>
                <View style={styles.doneButton}>
                    <Text style={styles.doneText}>{label.done}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
}

//export default Filter;
