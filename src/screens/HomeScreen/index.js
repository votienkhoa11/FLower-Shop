/* eslint-disable react-native/no-inline-styles */
import { View, Text, ImageBackground, StatusBar, FlatList, ScrollView,
    TextInput, Image, Animated } from 'react-native';
import React, { useState } from 'react';

//import styles
import style from './style';
import { width } from '../../styles';
import { color } from '../../styles';

//import icon
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

//import data
import label from './label';
import { user } from '../../database/MockData';
import { data } from '../../database/MockData';

//import components
import FlatListEvents from './events';

const Home = () => {

  return (
    <View style={style.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <ScrollView>
            <ImageBackground source={require('../../styles/imgs/greenBlurBG.png')} >
                <View style={{padding: 16}}>
                    <View style={style.header}>
                        <View>
                            <Text style={style.headerText}>{label.addressLabel}</Text>
                            <View style={style.frame8}>
                                <View style={style.avt}>
                                    <Octicons name="location" style={style.icon24px}/>
                                </View>
                                <Text style={style.address}>{user.address}</Text>
                            </View>
                        </View>
                        <View style={style.iconView}>
                            <MaterialIcons name="favorite" style={style.icon24px} />
                        </View>
                    </View>
                    <View style={style.search}>
                        <TextInput
                            placeholder="Tìm kiếm                                                                    "
                            autoCapitalize="none"
                            style={{padding: 8}}
                        />
                        <View style={style.searchIcon}>
                            <AntDesign name="search1" size={24} color={color.bgLight} />
                        </View>
                    </View>
                </View>
                <FlatListEvents />
            </ImageBackground>
        </ScrollView>
    </View>
  );
};

export default Home;
