/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import style from './styles';

//import icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import SaleComponent from './saleComponent';

const BroughtAgainCard = ({data = {}}) => {
  return (
    data !== {} ? (
        <View style={{padding: 8}}>
            <View style={style.broughtCard}>
                <TouchableOpacity activeOpacity={1}>
                        <Image source={data.image} style={style.broughtImage} />
                </TouchableOpacity>
                <View style={{flexDirection: 'row', paddingHorizontal: 8}}>
                    <View style={style.broughtTitle}>
                        <Text style={style.titleText}>{data.name}</Text>
                        <Text style={style.price}>{data.price}</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={style.addIcon}>
                            <AntDesign name="pluscircleo" size={16} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {
                data.salePercentage > 0 ? (
                    <SaleComponent data={data} saleStyle={style.sale} />
                ) : null
            }
        </View>
        ) : null
  );
};

export default BroughtAgainCard;
