/* eslint-disable react-native/no-inline-styles */
import { View, Text, ImageBackground, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { callToast } from '../../Components/Toast';

//import styles
import styles from './styles';
import defaultStyles, { color } from '../../DefaultStyles';

//import icons
import AntDesign from 'react-native-vector-icons/AntDesign';

//import data
import { data } from '../../database/MockData';

//import components
import LoadingScreen from '../../Components/LoadingScreen';

const ProdcuctScreen = ({route, navigation}) => {
    const [loading, setLoading] = useState(true);
    //get product information
    const {productID} = route.params;

    const productFilter = data.filter((productItem) => productItem.id === productID);
    const productInformation = productFilter[0];

    const salePriceCalculator = (price, sale) => {
        let offPrice = price / 100 * sale;

        return price - offPrice;
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(false);
        });

        return unsubscribe;
    }, [navigation]);
  return (
    loading ? <LoadingScreen /> :

    <View style={defaultStyles.container}>
        <StatusBar translucent backgroundColor="transparent" barstyles="dark-content" />
        <ScrollView>
            <View style={styles.header}>
                <Image source={productInformation.image} style={styles.productImage}/>
                <View style={styles.viewInsideImage}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="left" style={styles.backButton} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.productNameView}>
                <Text style={styles.productName}>{productInformation.name}</Text>
                <Text style={styles.otherNames}>Nick name of the product</Text>
            </View>
            <View style={styles.pricesView}>
                <Text
                    style={[
                        styles.price,
                        {color: productInformation.salePercentage > 0 ? color.redSale : null},
                    ]}
                >
                    {salePriceCalculator(productInformation.price, productInformation.salePercentage)}
                </Text>
                {
                    productInformation.salePercentage > 0 ?
                        <Text style={styles.basedPrice}>{productInformation.price}</Text>
                    : null
                }
            </View>
        </ScrollView>
    </View>
  );
};

export default ProdcuctScreen;
