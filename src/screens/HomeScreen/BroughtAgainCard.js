/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import style from './style';

//import icon
import AntDesign from 'react-native-vector-icons/AntDesign';

const BroughtAgainCard = ({data}) => {
  return (
    <View style={{padding: 8}}>
        <View style={style.broughtCard}>
            <TouchableOpacity>
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
                <View style={style.sale} >
                    <Image source={require('../../styles/imgs/saleLabel.png')} style={style.saleIcon} />
                    <View style={style.sale2} >
                        <Text style={style.saleText} >Giảm {data.salePercentage}%</Text>
                    </View>
                </View>
            ) : null
        }
    </View>
  );
};

export default BroughtAgainCard;
