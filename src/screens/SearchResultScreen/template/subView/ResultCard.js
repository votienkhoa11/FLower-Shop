/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../Components/Buttons/Button';
import { config } from '../../../../configurations';
import AntDesign from 'react-native-vector-icons/AntDesign';
//import style
import styles from '../../styles';

const ResultCard = ({data = {}}) => {
    const navigation = useNavigation();

    //const imageSource = {uri: config.endPoint + data.images[0].file_path};

    const [valid, setValid] = useState(true);

    return ( data &&
        <View style={styles.resultCard}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('product', {
                    productID: data.id,
                })}
            >
                <Image
                    onError={() => setValid(!valid)}
                    source={config.noImage}
                    style={styles.productImage} />
            </TouchableOpacity>
            <View style={styles.information}>
                <Text style={styles.resultName}>{data.name}</Text>
                <Text style={styles.description}>{data.product_main_raw_list    }</Text>
                <View style={styles.priceView}>
                    <Text
                        style={styles.price}
                    >
                        {data.promotion_price  ?
                            data.promotion_price : data.original_price
                        }
                    </Text>
                    {
                        data.promotion_price ?
                            <Text style={styles.oldPrice}>{data.original_price}</Text>
                        : null
                    }
                </View>
            </View>
            <View style={{justifyContent: 'flex-end'}}>
                <Button
                    leftIcon={<AntDesign name="pluscircle" style={styles.addIcon} />}
                    activeOpacity={1}
                />
            </View>
        </View>
    );
};

export default ResultCard;
