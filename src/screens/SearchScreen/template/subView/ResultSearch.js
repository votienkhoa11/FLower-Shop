import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import salePriceCalculator from '../../../../utils/salePriceCalculator';

//import style
import styles from '../../styles';

const ResultSearch = ({data = {}}) => {
    const navigation = useNavigation();

    return (
        data !== {} ? (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('product', {
                    productID: data.id,
                })}
            >
                <View style={styles.resultCard}>
                    <Image source={data.image[0]} style={styles.productImage} />
                    <View style={styles.information}>
                        <Text style={styles.resultName}>{data.name}</Text>
                        <Text style={styles.description}>{data.description}</Text>
                        <View style={styles.priceView}>
                            <Text
                                style={styles.price}
                            >
                                {data.salePercentage > 0 ? salePriceCalculator(data.price, data.salePercentage) : data.price}
                            </Text>
                            {
                                data.salePercentage > 0 ?
                                    <Text style={styles.oldPrice}>{data.price}</Text>
                                : null
                            }
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            ) : null
    );
};

export default ResultSearch;
