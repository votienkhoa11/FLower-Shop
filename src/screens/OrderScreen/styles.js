import { StyleSheet, StatusBar } from 'react-native';
import { color } from '../../DefaultStyles';

import { width } from '../../DefaultStyles';

export default StyleSheet.create({
    header: {
        marginTop: StatusBar.currentHeight,
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
    },

    headerLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 8,
    },

    searchButton: {
        paddingVertical: 6,
        paddingLeft: 8,
        fontSize: 24,
    },

    buttonName: {
        fontSize: 14,
        color: color.gray,
    },

    //flatlist orders styles
    itemContainer: {
        marginHorizontal: 16,
        marginVertical: 8,
        paddingVertical: 16,
        paddingHorizontal: 8,
        flexDirection: 'row',
        gap: 8,
        borderRadius: 14,
        shadowColor: color.black,
        shadowOffset: {
            width: 20,
            height: 24,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
        backgroundColor: color.bgWhite,
    },

    imageProduct: {
        width: 72,
        height: 72,
        resizeMode: 'cover',
        borderRadius: 8,
    },

    footer: {
        height: 220,
        opacity: 0,
    },

    orderInformation: {
        flex: 1,
        paddingLeft: 4,
    },

    productInformation: {
        paddingVertical: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color:color.mediumBlack,
    },

    price: {
        fontSize: 12,
        color: color.grayMedium,
        letterSpacing: 0.32,
    },

    status: {
        paddingVertical: 4,
        fontSize: 12,
        fontWeight: 'bold',
    },

    orderButton: {
        padding: 7,
        paddingHorizontal: 14,
        backgroundColor: color.greenLight,
        borderRadius: 40,
    },

    orderAgain: {
        fontSize: 12,
        fontWeight: 'bold',
        color: color.greenDark,
    },
});
