/* eslint-disable react-native/no-inline-styles */
import { View, Text, ImageBackground, StatusBar, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';

//import styless
import defaultStyles, { color } from '../../../DefaultStyles';
import styles from '../styles';

//import icon
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

//import data
import label from '../label';
import { categories } from '../../../database/MockData';

//import components
import ProductItemCard from '../../../Components/ProductCard/ProductItemCard';
import LoadingScreen from '../../../Components/LoadingScreen';
import FlatListEvents from './subView/events';
import CategoryCard from './subView/CategoryCard';
import PopularCard from './subView/PopularCard';
import ProductCard from './subView/ProductCard';
import CartButton from '../../../Components/Buttons/CartButton';

const HomeMainView = (props) => {
    const {
        navigation,
        loading,
        userInfo,
        favorite,
        setFavoriteButton,
        popularProduct,
        broughtProducts,
        product,
    } = props;

  return (
    loading ? <LoadingScreen /> :

    <View style={defaultStyles.container}>
        <StatusBar translucent backgroundColor="transparent" barstyles="dark-content" />
        <View style={{flex: 1}}>
            <ScrollView>
                <ImageBackground
                    source={require('../../../assets/imgs/greenBlurBG.png')}
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
                                    {userInfo ? <Text style={styles.address}>{userInfo.address}</Text> : null}
                                </View>
                            </View>
                            {/*Favorite icon View*/}
                            <View style={styles.iconView}>
                            {
                                favorite ?
                                <TouchableOpacity
                                    onPress={() => setFavoriteButton()}>
                                    <MaterialIcons name="favorite" style={styles.icon24px} />
                                </TouchableOpacity>

                                : <TouchableOpacity
                                    onPress={() => setFavoriteButton()}>
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
                                    return <ProductItemCard data={broughtProductData} key={broughtProductData.id} />;
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
    </View>
  );
};

export default HomeMainView;
