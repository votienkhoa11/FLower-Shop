import { StyleSheet, StatusBar } from 'react-native';
import { width } from '../../DefaultStyles';

//color
import { color } from '../../DefaultStyles';

export default StyleSheet.create({
    //address
    header: {
        width: '100%',
        flexDirection: 'row',
        marginTop: StatusBar.currentHeight,
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

    //event page view
    eventView: {
        width: width,
        height: 210,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 32,
    },

    imageEvent: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 12,
        overflow: 'hidden',
    },

    dotView: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    dotIndicators: {
        backgroundColor: color.greenLight,
        height: 8,
        borderRadius: 5,
        marginHorizontal: 2,
    },

    //categories view
    category: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },

    categoryCard: {
        width: 88,
        height: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 8,
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
        shadowColor: color.black,
        shadowOffset: {
            width: 20,
            height: 24,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
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
        margin: 16,
    },

    productCard: {
        flexDirection: 'row',
        backgroundColor: color.bgWhite,
        gap: 8,
        marginBottom: 16,
        borderRadius: 8,
        shadowColor: color.black,
        shadowOffset: {
            width: 20,
            height: 24,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
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
        height: 40,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: color.green,
        borderWidth: 1,
        borderRadius: 24,
    },

    watchMoreLabel: {
        fontSize: 16,
        color: color.green,
        fontWeight: '600',
    },
});
