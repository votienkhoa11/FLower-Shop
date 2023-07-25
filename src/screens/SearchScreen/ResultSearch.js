import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

//import style
import styles from './styles';

const ResultSearch = ({data = []}) => {
    return (
        data !== [] ? (
            <TouchableOpacity activeOpacity={1}>
                <View style={styles.resultCard}>
                    <Image source={data.image} style={styles.productImage} />
                    <View style={styles.information}>
                        <View style={styles.nameCard}>
                            <Text style={styles.resultName}>{data.name}</Text>
                        </View>
                        <View style={styles.descriptionCard}>
                            <Text style={styles.description}>{data.description}</Text>
                            <Text style={styles.price}>{data.price} VND</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            ) : null
    );
};

export default ResultSearch;
