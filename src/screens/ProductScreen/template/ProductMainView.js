/* eslint-disable react-native/no-inline-styles */
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

import CollapseView from './subView/CollapseView';

//import styles
import styles from '../styles';
import defaultStyles from '../../../DefaultStyles';
import { color } from '../../../values/color';

//import icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

//import data
import label from '../label';

//import components
import LoadingScreen from '../../../Components/LoadingScreen';
import FlatlistImageView from '../../../Components/FlatlistImageView/FlatlistImageView';
import Button from '../../../Components/Buttons/Button';
import StarRate from './subView/StarRate';
import Review from './subView/Review';
import CartButton from '../../../Components/Buttons/CartButton';
import ProductItemCard from '../../../Components/ProductCard/ProductItemCard';

const ProductMainView = (props) => {
    const {
        navigation,
        //values
        isLoading,
        productInformation,
        rating,
        chooseRating,
        quantity,
        reviews,
        products,
        //functions
        setRating,
        setChooseRating,
        setQuantity,
    } = props;

  return (
    isLoading ? <LoadingScreen /> :

    <View style={defaultStyles.container}>
        <StatusBar translucent backgroundColor="transparent" barstyles="dark-content" />
        <ScrollView>
            <View style={styles.header}>
                {/*Image */}
                <View style={styles.imageView}>
                    <FlatlistImageView
                        imageData={null}
                        imageStyle={styles.productImage}
                        dotStyle={styles.dotView}
                        isInside={true}
                    />
                    <View style={styles.viewInsideImage}>
                        <TouchableOpacity onPress={() => navigation.goBack(null)}>
                            <AntDesign name="left" style={styles.backButton} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/*Product information */}
                <View style={styles.productNameView}>
                    <Text style={styles.label}>{productInformation.name}</Text>
                    <Text style={styles.otherNames}>{productInformation.product_main_raw_list}</Text>
                </View>
                <View style={styles.pricesView}>
                    <Text
                        style={[
                            styles.price,
                            {color: productInformation.promotion_price > 0 ? color.redSale : null},
                        ]}
                    >
                        {productInformation.original_price}
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
                        <Text>{label.sold} {productInformation.quantity_sold}</Text>
                    </View>
                    {/*Favorite and share */}
                    <View style={styles.subRowView}>
                        <Button
                            onPress={() => console.log('favoritve')}
                            leftIcon={<MaterialIcons name="favorite-border" style={styles.icon15} />}
                            activeOpacity={1}
                        />
                        <Button
                            onPress={() => console.log('share')}
                            leftIcon={<Feather name="share-2" style={styles.icon15} />}
                            activeOpacity={1}
                        />
                    </View>
                </View>
            </View>
            <View style={[
                styles.header,
                {
                    marginTop: 16,
                    paddingTop: 0,
                },
                defaultStyles.shadow,
                ]}
            >
                <View style={styles.detailHeader}>
                    <Text style={styles.label}>{label.productDetail}</Text>
                </View>
                <CollapseView>
                    <Text>Bó hoa Hồng đỏ đầy lãng mạn là món quà hoàn hảo thay lời muốn nói gửi đến người thương của bạn vào Valentine hoặc ngày kỷ niệm, sinh nhật.</Text>
                </CollapseView>
            </View>
            {/*Review section */}
            <View style={[
                styles.header,
                    {
                        marginTop: 16,
                        paddingTop: 0,
                    },
                defaultStyles.shadow,
                ]}
            >
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
                <CollapseView>
                    {
                        (reviews || []).map(reviewsData => {
                            return <Review reviewData={reviewsData} key={reviewsData.id} />;
                        })
                    }
                </CollapseView>
            </View>
            {/*Similar product section */}
            <View style={styles.similarProductTitle}>
                <View style={styles.line1Height} />
                <Text style={styles.label}>{label.similarProduct}</Text>
                <View style={styles.line1Height} />
            </View>
            <View style={styles.similarProductView}>
                {
                    (products.slice(0, 6) || []).map(productItem => {
                        return (
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => console.log(productItem.id)}
                                key={productItem.id}
                            >
                                <ProductItemCard data={productItem} />
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        </ScrollView>
        {/*Buy section*/}
        <View style={styles.buySection}>
            {/*price and quantiy change */}
            <View style={styles.priceView}>
                <Text style={styles.number}>{productInformation.original_price * quantity}đ</Text>
                {/*quantiy change */}
                <View style={styles.quantityChange}>
                    <Button
                        activeOpacity={1}
                        onPress={() => setQuantity(quantity - 1)}
                        disabled = {quantity === 1 ? true : false}
                        leftIcon={
                            <AntDesign
                                name="minuscircleo"
                                style={[styles.changeQuantityButton, {
                                    color: quantity === 1 ? color.bgMedium : color.green,
                                }]}
                            />
                        }
                    />
                    <Text
                        style={styles.number}
                    >
                        {quantity < 10 ? `0${quantity}` : quantity}
                    </Text>
                    <Button
                        activeOpacity={1}
                        onPress={() => setQuantity(quantity + 1)}
                        leftIcon={<AntDesign name="pluscircleo" style={styles.changeQuantityButton} />}
                    />
                </View>
            </View>
            <Button
                onPress={() => console.log(label.buy)}
                text={label.buy}
                fontSize={16}
                fontWeight="600"
                textColor={color.bgWhite}
                height={48}
                backgroundColor={color.green}
                style={styles.buyButton}
            />
        </View>
        <CartButton style={{marginBottom: 102}}/>
    </View>
  );
};

export default ProductMainView;
