import { StyleSheet, StatusBar } from 'react-native';
import { width } from '../../styles';

//color
import { color } from '../../styles';

export default StyleSheet.create({
    //container of home screen
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: color.bgWhite,
    },

    //address
    header: {
        width: '100%',
        flexDirection: 'row',
        marginTop: StatusBar.currentHeight,
    },

    addressLabel: {
        fontSize: 14,
        letterSpacing: 0.16,
        color: '#161616',
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
    },

    address: {
        fontSize: 14,
        letterSpacing: 0.16,
        color: color.bgMedium,
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
        flexDirection: 'row',
        padding: 1,
        backgroundColor: color.bgWhite,
        alignItems: 'center',
        flex: 1,
        borderRadius: 8,
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
        height: 122.8,
        width: 112,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    title: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        paddingHorizontal: 10,
    },

    titleText: {
        fontSize: 12,
        fontWeight: '500',
        color: color.black,
    },

    //brought items view
    broughtCard: {
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

    broughtImage: {
        width: 164,
        height: 122,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    sale: {
        position: 'absolute',
        alignItems: 'center',
        marginVertical: 15,
        marginLeft: 4,
        width: 70,
        height: 25,
    },

    saleIcon: {
        resizeMode: 'stretch',
        width: 70,
        height: 25,
    },

    sale2: {
        flex: 1,
        position: 'absolute',
        paddingTop: 2,
        paddingRight: 6,
        alignItems: 'center',
        alignContent: 'center',
    },

    saleText: {
        fontSize: 10,
        fontWeight: '500',
        color: color.bgWhite,
    },

    broughtTitle: {
        width: 130,
        paddingVertical: 12,
        flexWrap: 'wrap',
    },

    price: {
        paddingTop: 2,
        fontSize: 10,
        fontWeight: '500',
        color: color.bgMedium,
    },

    addIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        color: color.bgMedium,
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
        borderColor: '#36a46d',
        borderWidth: 1,
        borderRadius: 24,
    },

    watchMoreLabel: {
        fontSize: 16,
        color: '#36a46d',
        fontWeight: '600',
    },

    //cart button
    buttonCart: {
        position: 'absolute',
        width: 52,
        height: 52,
        backgroundColor: color.bgWhite,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20,
        right: 20,
        borderRadius: 180,
        shadowColor: color.black,
        shadowOffset: {
            width: 8,
            height: 24,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },

    cartIcon: {
        flex: 1,
        fontSize: 18,
        color: color.black,
        alignContent: 'center',
        paddingVertical: 16,
    },

    numberCart: {
        position: 'absolute',
        width: 15,
        height: 15,
        backgroundColor: '#36a46d',
        borderRadius: 180,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 8,
    },

    number: {
        fontSize: 10,
        fontWeight: '500',
    },
});
