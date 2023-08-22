import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

//import styles
import defaultStyles from '../../DefaultStyles';
//import icon
import Entypo from 'react-native-vector-icons/Entypo';

const CartButton = ({style}) => {
  return (
    <View style={[defaultStyles.buttonCart, style]}>
        <TouchableOpacity>
            <Entypo name="shopping-cart" style={defaultStyles.cartIcon} />
            <View style={defaultStyles.numberCart}>
                <Text style={defaultStyles.number}>1</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default CartButton;
