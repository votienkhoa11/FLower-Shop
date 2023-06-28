/* eslint-disable react-native/no-inline-styles */
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import React from 'react';

//import styles
import style from './style';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

//import icon
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { color } from '../../styles';

const Home = () => {
  return (
    <View style={style.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <ScrollView>
            <ImageBackground source={require('../../styles/imgs/greenBlurBG.png')} >
                <View style={{padding: 16}}>
                    <View style={style.header}>
                        <View>
                            <Text style={style.headerText}>Giao hàng tới</Text>
                            <View style={style.frame8}>
                                <View style={style.avt}>
                                    <Octicons name="location" style={style.icon24px}/>
                                </View>
                                <Text style={style.address}>03, Sông Thao, phường 2, Quận Tân Bình</Text>
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
            </ImageBackground>
        </ScrollView>
    </View>
  );
};

export default Home;
