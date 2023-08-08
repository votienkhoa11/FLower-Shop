import { StyleSheet, StatusBar } from 'react-native';
import { color } from '../../DefaultStyles';

export default StyleSheet.create({
    header: {
        marginTop: StatusBar.currentHeight + 16,
        paddingHorizontal: 16,
    },

    productImage: {
        width: 358,
        height: 330,
        resizeMode: 'cover',
        borderRadius: 12,
    },

    viewInsideImage: {
        flex: 1,
        position: 'absolute',
        marginHorizontal: 16 + 5,
        marginVertical: 5,

    },

    backButton: {
        fontSize: 24,
        color: color.bgWhite,
        marginTop: 5,
    },

    productNameView: {
        paddingHorizontal: 16,
        paddingTop: 16,
        gap: 4,
    },

    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.mediumBlack,
    },

    otherNames: {
        fontSize: 12,
        color: color.lightDark,
        letterSpacing: 0.32,
    },

    pricesView: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        gap: 2,
    },

    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.mediumBlack,
    },

    basedPrice: {
        fontSize: 12,
        color: color.lightDark,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
});
