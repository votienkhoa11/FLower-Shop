/* eslint-disable react-native/no-inline-styles */
import { View, Text, StatusBar, ScrollView, Image, LogBox } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import { callToast } from '../../../Components/Toast';

//import styles
import styles from '../styles';
import defaultStyles, { color } from '../../../DefaultStyles';

//import icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

//import data
import label from '../label';

//import components
import LoadingScreen from '../../../Components/LoadingScreen';
import CartButton from '../../../Components/Buttons/CartButton';
import StarRate from './subView/StarRate';
import Review from './subView/Review';

const ProductMainView = (props) => {
    const {
        navigation,
        //values
        loading,
        productInformation,
        rating,
        chooseRating,
        quantity,
        reviews,
        //functions
        salePriceCalculator,
        setRating,
        setChooseRating,
        setQuantity,
    } = props;

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
                            showNumber={true}
                            showMaxStar={false}
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
            <View style={[styles.header, {marginTop: 16, paddingTop: 0}]}>
                <View style={styles.detailHeader}>
                    <Text style={styles.label}>{label.reviewProduct}</Text>
                    <View style={styles.reviewView} pointerEvents= "none">
                        <StarRate
                            rating={rating}
                            onChange={setRating}
                            styleText={{fontSize: 12, color: color.red}}
                            showNumber={true}
                            showMaxStar={true}
                            enableSwiping={false}
                        />
                        <Text style={styles.reviewText}>(10 {label.review})</Text>
                    </View>
                </View>
                {/*Review section */}
                <View style={{paddingHorizontal: 16}}>
                    {
                        (reviews || []).map(reviewsData => {
                            return <Review reviewData={reviewsData} key={reviewsData.id} />;
                        })
                    }
                </View>
            </View>
            <View style={styles.similarProductTitle}>
                <View style={styles.line1Height} />
                <Text style={styles.label}>{label.similarProduct}</Text>
                <View style={styles.line1Height} />
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

export default ProductMainView;
