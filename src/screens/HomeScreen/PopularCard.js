import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import style from './style';

const PopularCard = ({data}) => {
  return (
    <TouchableOpacity>
        <View style={{padding: 8}}>
            <View style={style.popularCard}>
                <Image source={data.image} style={style.popularImage} />
                <View style={style.title}>
                    <Text style={style.titleText}>{data.name}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  );
};

export default PopularCard;
