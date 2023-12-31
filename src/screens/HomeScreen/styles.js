import { StyleSheet } from 'react-native';
import { marginTop } from '../../DefaultStyles';
//color
import { color } from '../../values/color';
import shadow from '../../values/shadow';

export default StyleSheet.create({
    //address
    header: {
        width: '100%',
        flexDirection: 'row',
        marginTop: marginTop,
    },

    addressLabel: {
        fontSize: 14,
        letterSpacing: 0.16,
        color: color.mediumDark,
        fontWeight: '600',
    },

    frame8: {
        width: 270,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 8,
    },

    icon24px: {
        fontSize: 26,
        padding: 8,
        color: color.mediumDark,
    },

    address: {
        fontSize: 14,
        letterSpacing: 0.16,
        color: color.black,
        flexShrink: 1,
        padding: 1,
        opacity: 0.7,
    },

    iconView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 40,
        marginVertical: 0,
    },

    //search
    search: {
        height: 48,
        flexDirection: 'row',
        padding: 8,
        backgroundColor: color.bgWhite,
        alignItems: 'center',
        flex: 1,
        borderRadius: 8,
    },

    searchText: {
        fontSize: 14,
        flex: 1,
        color: color.lightDark,
    },

    searchIcon: {
        paddingRight: 4,
    },

    //categories view
    category: {
        alignItems: 'center',
        padding: 8,
    },

    categoryCard: {
        width: 88,
        height: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 8,
        marginHorizontal: 2,
    },

    categoryImage: {
        width: 70,
        height: 70,
        resizeMode: 'cover',
        borderRadius: 10,
    },

    categoryName: {
        paddingTop: 8,
        fontSize: 10,
        fontWeight: '500',
        color: color.black,
        alignContent: 'center',
        textAlign: 'center',
    },

    //popular view
    popular: {
        paddingLeft: 0,
        paddingVertical: 10,
        marginVertical: 8,
    },

    label: {
        fontSize: 16,
        color: color.black,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        paddingBottom: 8,
    },

    horizonalView: {
        flexDirection: 'row',
    },

    popularCard: {
        width: 114,
        height: 170,
        backgroundColor: color.bgWhite,
        borderRadius: 10,
        ...shadow,
    },

    popularImage: {
        height: 123,
        width: 114,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleText: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '500',
        flexWrap: 'wrap',
        color: color.black,
    },

    //recommendation view
    recommendContainer: {
        marginVertical: 24,
    },

    productCard: {
        marginHorizontal: 16,
        marginVertical: 8,
        flexDirection: 'row',
        backgroundColor: color.bgWhite,
        borderRadius: 8,
        ...shadow,
    },

    productImage: {
        width: 107,
        height: 107,
        margin: 4,
        resizeMode: 'cover',
        borderRadius: 8,
    },

    information: {
        flex: 1,
        margin: 8,
        gap: 8,
    },

    informationCard: {
        width: '100%',
        flex: 1,
        gap: 4,
        borderBottomColor: color.bgLight,
        borderBottomWidth: 1,
    },

    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.black,
        flexWrap: 'wrap',
    },

    description: {
        fontSize: 12,
        letterSpacing: 0.32,
        color: color.mediumBlack,
        flexWrap: 'wrap',
    },

    saleRecommend: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        marginVertical: 6,
        width: 70,
        height: 25,
    },

    //xem them button
    watchMoreButton: {
        margin: 16,
        borderRadius: 24,
    },
});
