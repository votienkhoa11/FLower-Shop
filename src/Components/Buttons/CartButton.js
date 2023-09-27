import { View, Text } from 'react-native';
import React from 'react';
import Button from './Button';

//import styles
import styles from './styles';

//import icon
import Entypo from 'react-native-vector-icons/Entypo';
import { color } from '../../values/color';

const ButtonIcon = () => {
    return (
        <View>
            <Entypo name="shopping-cart" style={styles.cartIcon} />
            <View style={styles.numberCart}>
                <Text style={styles.number}>1</Text>
            </View>
        </View>
    );
};

const CartButton = () => {
  return (
    <Button
        leftIcon={<ButtonIcon />}
        height={51}
        width={51}
        backgroundColor={color.bgWhite}
        style={styles.buttonCart}
    />
  );
};

export default CartButton;
