/* eslint-disable react-native/no-inline-styles */
import { View, Text, StatusBar, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { callToast } from '../../Components/Toast';

//import styles
import styles from './styles';
import defaultStyles, { color } from '../../DefaultStyles';

//import icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

//import data
import { data } from '../../database/MockData';
import label from './label';

//import components
import LoadingScreen from '../../Components/LoadingScreen';
import CartButton from '../../Components/Buttons/CartButton';
import StarRate from './StarRate';

const ProdcuctScreen = ({route, navigation}) => {
    const [loading, setLoading] = useState(true);
    //get product information
    const {productID} = route.params;

    const productFilter = data.filter((productItem) => productItem.id === productID);
    const productInformation = productFilter[0];

    //set rating
    //this rating can't be changed, used for show products rating in the comments
    const [rating, setRating] = useState(productInformation.rating);
    //this rating can be changed, user can set their own rating for the product
    const [chooseRating, setChooseRating] = useState(productInformation.rating);

    //set quantity
    const [quantity, setQuantity] = useState(1);

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
                {/*Image */}
                <View style={styles.imageView}>
                    <Image source={productInformation.image} style={styles.productImage}/>
                    <View style={styles.viewInsideImage}>
                        <TouchableOpacity onPress={() => navigation.goBack(null)}>
                            <AntDesign name="left" style={styles.backButton} />
                        </TouchableOpacity>
                        <View style={styles.dotView}>
                            <View style={styles.dot} />
                        </View>
                    </View>
                </View>
                {/*Product information */}
                <View style={styles.productNameView}>
                    <Text style={styles.label}>{productInformation.name}</Text>
                    <Text style={styles.otherNames}>{productInformation.name}</Text>
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
                <View style={styles.rowView}>
                    {/*Rating and sold */}
                    <View style={styles.subRowView}>
                        <StarRate
                            rating={chooseRating}
                            onChange={setChooseRating}
                            styleText={{fontSize: 12}}
                        />
                        <Entypo name="dot-single" size={20} />
                        <Text>{label.sold} {productInformation.sold}</Text>
                    </View>
                    {/*Favorite and share */}
                    <View style={styles.subRowView}>
                        <TouchableOpacity>
                            <MaterialIcons name="favorite-border" style={styles.icon15} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name="share-2" style={styles.icon15} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={[styles.header, {marginTop: 16, paddingTop: 0}]}>
                <View style={styles.detailHeader}>
                    <Text style={styles.label}>{label.productDetail}</Text>
                </View>
            </View>
        </ScrollView>
        {/*Buy section*/}
        <View style={styles.buySection}>
            {/*price and quantiy change */}
            <View style={styles.priceView}>
                <Text style={styles.number}>{productInformation.price * quantity}đ</Text>
                {/*quantiy change */}
                <View style={styles.quantityChange}>
                    <TouchableOpacity activeOpacity={1}
                        onPress={() => setQuantity(quantity - 1)}
                        disabled = {quantity === 1 ? true : false}
                    >
                        <AntDesign
                            name="minuscircleo"
                            style={[styles.changeQuantityButton, {
                                color: quantity === 1 ? color.bgMedium : color.green,
                            }]}
                            />
                    </TouchableOpacity>
                    <Text
                        style={styles.number}
                    >
                        {quantity < 10 ? `0${quantity}` : quantity}
                    </Text>
                    <TouchableOpacity activeOpacity={1}
                            onPress={() => setQuantity(quantity + 1)}
                    >
                        <AntDesign name="pluscircleo" style={styles.changeQuantityButton} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
            >
                <View style={styles.buyButton}>
                    <Text style={styles.buyText}>{label.buy}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default ProdcuctScreen;
