import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';

//import style
import styles from '../../styles';

import salePriceCalculator from '../../../../utils/salePriceCalculator';

const ResultCard = ({data = {}}) => {
    const navigation = useNavigation();

    return (
        data !== {} ? (
            <View style={styles.resultCard}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => navigation.navigate('product', {
                        productID: data.id,
                    })}
                >
                    <Image source={data.image[0]} style={styles.productImage} />
                </TouchableOpacity>
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
                <View style={styles.addIconView}>
                    <TouchableOpacity
                        onPress={() => console.log(data.id)}
                    >
                        <AntDesign name="pluscircle" style={styles.addIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            ) : null
    );
};

export default ResultCard;
