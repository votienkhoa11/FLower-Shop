import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
                            <Text style={styles.price}>{data.price}</Text>
                            <Text style={styles.oldPrice}>{data.price}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            ) : null
    );
};

export default ResultSearch;
