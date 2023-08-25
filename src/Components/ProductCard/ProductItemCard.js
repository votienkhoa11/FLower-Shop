/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './ProductItemCard.styles';

//import icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import SaleComponent from '../Sale';
import defaultStyles from '../../DefaultStyles';

const ProductItemCard = ({data = {}}) => {
  return (
    data !== {} ? (
        <View style={{padding: 8}}>
            <View style={[styles.itemCard, defaultStyles.shadow]}>
                <TouchableOpacity activeOpacity={1}>
                        <Image source={data.image[0]} style={styles.itemImage} />
                </TouchableOpacity>
                <View style={{flexDirection: 'row', paddingHorizontal: 8}}>
                    <View style={styles.itemTitle}>
                        <Text style={styles.titleText}>{data.name}</Text>
                        <Text style={styles.price}>{data.price}</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.addIcon}>
                            <AntDesign name="pluscircleo" size={16} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {
                data.salePercentage > 0 ? (
                    <SaleComponent data={data} saleStyle={styles.sale} />
                ) : null
            }
        </View>
        ) : null
  );
};

export default ProductItemCard;
