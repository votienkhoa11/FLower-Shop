/* eslint-disable react-native/no-inline-styles */
import { View, Text, ImageBackground, StatusBar, ScrollView,
    TextInput, Image, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';

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
import { categories } from '../../database/MockData';

//import components
import FlatListEvents from './events';
import CategoryCard from './CategoryCard';
import PopularCard from './PopularCard';

const Home = ({navigation}) => {
    //set data
    const [popularProduct, setPopularProduct] = useState([]);

    //get popular products
    const getPopularProduct = () => {
        let popularProductList = [];

        for (let index = 0; index < data.length; index++) {
            if (data[index].isPopular) {
                popularProductList.push(data[index]);
            }
        }

        setPopularProduct(popularProductList);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getPopularProduct();
        });

        return unsubscribe;
    }, [navigation]);

  return (
    <View style={style.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <ScrollView>
            <ImageBackground source={require('../../styles/imgs/greenBlurBG.png')} >
                <View style={{padding: 16}}>
                    <View style={style.header}>
                        <View>
                            <Text style={style.addressLabel}>{label.addressLabel}</Text>
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
                <View style={{padding: 8}} >
                    <View style={style.category}>
                        {
                            categories.map(cateData => {
                                return <CategoryCard data={cateData} key={cateData.id} />;
                            })
                        }
                    </View>
                </View>
                <View style={style.popular}>
                        <Text style={style.label}>{label.popularLabel}</Text>
                        <ScrollView horizontal >
                            <View style={{flexDirection: 'row'}}>
                            {
                                popularProduct.map(popularData => {
                                    return <PopularCard data={popularData} key={popularData.id} />;
                                })
                            }
                            </View>
                        </ScrollView>
                </View>
                <View>
                    <Text style={style.label}>{label.buyAgainLabel}</Text>
                </View>
            </ImageBackground>
        </ScrollView>
    </View>
  );
};

export default Home;
