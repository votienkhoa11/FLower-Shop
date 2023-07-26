/* eslint-disable react-native/no-inline-styles */
import { View, Text, ImageBackground, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { callToast } from '../Components/Toast';

//import styless
import defaultStyles from '../../DefaultStyles';
import styles from './styles';
import { color } from '../../DefaultStyles';

//import icon
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

//import data
import label from './label';
import { user } from '../../database/MockData';
import { userData } from '../../api/userData';
import { data } from '../../database/MockData';
import { categories } from '../../database/MockData';

//import components
import LoadingScreen from '../Components/LoadingScreen';
import FlatListEvents from './events';
import CategoryCard from './CategoryCard';
import PopularCard from './PopularCard';
import BroughtAgainCard from './BroughtAgainCard';
import ProductCard from './ProductCard';
import CartButton from '../Components/CartButton';

const HomeScreen = ({navigation}) => {
    //set data
    const [product, setProduct] = useState([]);
    const [popularProduct, setPopularProduct] = useState([]);
    const [broughtProducts, setBroughtProduct] = useState([]);
    const [userInfo, setUser] = useState([]);

    const [loading, setLoading] = useState(true);
    const [favorite, setFavorite] = useState(false);

    //get data from the database
    const getDatafromDB = async () => {
        //get user
        setUser(await userData());
        //get product
        const productList = [...data];

        productList.sort(() => 0.5 - Math.random());
        setProduct(productList.slice(0, 5));

        //get popular products by sorting productList's like
        //the idea is use the sort function to sort based on comapring like products from (from highest to lowest)
        const popularProductList = productList.sort(function(a, b) {
            const keyA = a.like || 0;
            const keyB = b.like || 0;
            //compare the 2 like of the products
            return keyB - keyA;
        });

        //set the popular product with top 5 item
        setPopularProduct(popularProductList.slice(0, 5));

        //get products that the users has brought before to ask them to buy again
        const broughtProductList = data.filter((productItem) =>
            user.broughtProducts.includes(productItem.id));

        //set 5 brought products
        setBroughtProduct(broughtProductList.slice(0, 5));
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDatafromDB();

            //set loading to false when the app finised loading data
            setLoading(false);
        });

        return unsubscribe;
    }, [navigation]);

  return (
    <View style={defaultStyles.container}>
        <StatusBar translucent backgroundColor="transparent" barstyles="dark-content" />
        {
            loading ? (
                <LoadingScreen />
            ) : (
                <View style={{flex: 1}}>
                    <ScrollView>
                        <ImageBackground
                            source={require('../../DefaultStyles/imgs/greenBlurBG.png')}
                            resizeMode="cover"
                        >
                            {/*Address View*/}
                            <View style={defaultStyles.padding16}>
                                <View style={styles.header}>
                                    <View>
                                        <Text style={styles.addressLabel}>{label.addressLabel}</Text>
                                        <View style={styles.frame8}>
                                            <View style={styles.avt}>
                                                <Octicons name="location" style={styles.icon24px}/>
                                            </View>
                                            <Text style={styles.address}>{userInfo.address}</Text>
                                        </View>
                                    </View>
                                    {/*Favorite icon View*/}
                                    <View style={styles.iconView}>
                                    {
                                        favorite ?
                                        <TouchableOpacity
                                            onPress={() => {
                                                setFavorite(false);
                                                callToast('Unfavorite');
                                                }}>
                                            <MaterialIcons name="favorite" style={styles.icon24px} />
                                        </TouchableOpacity>

                                        : <TouchableOpacity
                                            onPress={() => {
                                                setFavorite(true);
                                                callToast('Favorite');
                                            }}>
                                            <MaterialIcons name="favorite-border" style={styles.icon24px} />
                                        </TouchableOpacity>
                                    }
                                    </View>
                                </View>
                                {/*Search View*/}
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('search');
                                    }}
                                    activeOpacity={1}
                                >
                                    <View style={styles.search}>
                                        <Text style={styles.searchText}>Tìm kiếm</Text>
                                            <View style={styles.searchIcon}>
                                                <AntDesign name="search1" size={24} color={color.lightDark} />
                                            </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {/*Sale Events View*/}
                            <FlatListEvents />
                            {/*Categories View*/}
                            <View style={{padding: 8}} >
                                <View style={styles.category}>
                                    {
                                        (categories || []).map(categoryData => {
                                            return <CategoryCard data={categoryData} key={categoryData.id} />;
                                        })
                                    }
                                </View>
                            </View>
                            {/*Popular Products View*/}
                            <View style={styles.popular}>
                                <Text style={styles.label}>{label.popularLabel}</Text>
                                <ScrollView
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <View style={styles.horizonalView}>
                                    {
                                        (popularProduct || []).map(popularProductData => {
                                            return <PopularCard data={popularProductData} key={popularProductData.id} />;
                                        })
                                    }
                                    </View>
                                </ScrollView>
                            </View>
                        </ImageBackground>
                        {/*Buy again recommend View*/}
                        <View>
                            <Text style={styles.label}>{label.buyAgainLabel}</Text>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={styles.horizonalView}>
                                    {
                                        (broughtProducts || []).map(broughtProductData => {
                                            return <BroughtAgainCard data={broughtProductData} key={broughtProductData.id} />;
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </View>
                        {/*recommend View*/}
                        <View style={styles.recommendContainer}>
                            <Text style={[styles.label, {paddingHorizontal: 0}]}>{label.recommendLabel}</Text>
                            <View>
                                {
                                    (product || []).map(productData => {
                                        return <ProductCard data={productData} key={productData.id}/>;
                                    })
                                }
                            </View>
                            <TouchableOpacity>
                                <View style={styles.watchMoreButton}>
                                    <Text style={styles.watchMoreLabel}>{label.watchMore}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    {/*Button View*/}
                    <CartButton />
                </View>
            )
        }
    </View>
  );
};

export default HomeScreen;
