/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, ImageBackground, StatusBar, ScrollView, TouchableOpacity,
    TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import Toast from 'react-native-root-toast';

//import styles
import style from './style';
import { color } from '../../styles';

//import icon
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

//import data
import label from './label';
import { user } from '../../database/MockData';
import { data } from '../../database/MockData';
import { categories } from '../../database/MockData';

//import components
import FlatListEvents from './events';
import CategoryCard from './CategoryCard';
import PopularCard from './PopularCard';
import BroughtAgainCard from './BroughtAgainCard';
import ProductCard from './ProductCard';

const HomeScreen = ({navigation}) => {
    //set data
    const [product, setProduct] = useState([]);
    const [popularProduct, setPopularProduct] = useState([]);
    const [broughtProducts, setBroughtProduct] = useState([]);

    const [favorite, setFavorite] = useState(false);

    const callToast = (msg) => {
        Toast.show(msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          backgroundColor: '#fff',
          textColor: '#000',
      });
    };

    //get data from the database
    const getDatafromDB = () => {
        //get product
        let productList = [];

        for (let index = 0; index < data.length; index++) {
            productList.push(data[index]);
        }
        productList = productList.sort(() => 0.5 - Math.random());
        setProduct(productList.slice(0, 5));

        //get popular products by sorting productList
        //the idea is use the sort function to sort based on comapring like products
        let popularProductList = productList.sort(function(a, b) {
            let keyA = a.like;
            let keyB = b.like;
            //compare the 2 like of the products
            if (keyA < keyB) return 1;
            if (keyA > keyB) return -1;
            return 0;
        });
        //set the popular product with top 5 item
        setPopularProduct(popularProductList.slice(0, 5));

        //get products that the users has brought before to ask them to buy again
        let broughtProductList = [];

        //use for loop to check the products that user had brought before to recommend
        //the user to buy again.
        for (let broughtIndex = 0; broughtIndex < user.broughtProducts.length; broughtIndex++) {
            for (let itemIndex = 0; itemIndex < data.length; itemIndex++) {
                if (data[itemIndex].id === user.broughtProducts[broughtIndex]) {
                    broughtProductList.push(data[itemIndex]);
                }
            }
        }
        //set 5 brought products
        setBroughtProduct(broughtProductList.slice(0, 5));
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDatafromDB();
        });

        return unsubscribe;
    }, [navigation]);

  return (
    <View style={style.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <ScrollView>
            <ImageBackground
                source={require('../../styles/imgs/greenBlurBG.png')}
                resizeMode="cover"
            >
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
                        {
                            favorite ?
                            <TouchableOpacity
                                onPress={() => {
                                    setFavorite(false);
                                    callToast('Unfavoite');
                                    }}>
                                <MaterialIcons name="favorite" style={style.icon24px} />
                            </TouchableOpacity>

                            : <TouchableOpacity
                                onPress={() => {
                                    setFavorite(true);
                                    callToast('Favorite');
                                }}>
                                <MaterialIcons name="favorite-border" style={style.icon24px} />
                            </TouchableOpacity>
                        }
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
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={style.horizonalView}>
                        {
                            popularProduct.map(popularData => {
                                return <PopularCard data={popularData} key={popularData.id} />;
                            })
                        }
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
            <View>
                <Text style={style.label}>{label.buyAgainLabel}</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={style.horizonalView}>
                        {
                            broughtProducts.map(broughtData => {
                                return <BroughtAgainCard data={broughtData} key={broughtData.id} />;
                            })
                        }
                    </View>
                </ScrollView>
            </View>
            <View style={style.recommendContainer}>
                <Text style={[style.label, {paddingHorizontal: 0}]}>{label.recommendLabel}</Text>
                <View>
                    {
                        product.map(productData => {
                            return <ProductCard data={productData} key={productData.id}/>;
                        })
                    }
                </View>
                <TouchableOpacity>
                    <View style={style.watchMoreButton}>
                        <Text style={style.watchMoreLabel}>{label.watchMore}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
            <View style={style.buttonCart}>
                <TouchableOpacity>
                    <Entypo name="shopping-cart" style={style.cartIcon} />
                    <View style={style.numberCart}>
                        <Text style={style.number}>1</Text>
                    </View>
                </TouchableOpacity>
            </View>
    </View>
  );
};

export default HomeScreen;
