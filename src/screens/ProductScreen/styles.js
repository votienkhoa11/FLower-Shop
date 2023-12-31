import { StyleSheet } from 'react-native';
import { marginTop } from '../../DefaultStyles';
import { color } from '../../values/color';
import shadow from '../../values/shadow';

export default StyleSheet.create({
    header: {
        paddingTop: marginTop,
        backgroundColor: color.bgWhite,
        ...shadow,
    },

    //image view
    imageView: {
        paddingTop: 16,
    },

    productImage: {
        height: 330,
        borderRadius: 12,
    },

    dotView: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 16,
    },

    viewInsideImage: {
        flex: 1,
        width: '100%',
        height: 330,
        position: 'absolute',
        flexWrap: 'wrap',
        marginHorizontal: 16,
        marginTop: 10,
    },

    backButton: {
        fontSize: 24,
        color: color.bgWhite,
        marginTop: 16,
        padding: 5,
    },

    productNameView: {
        paddingHorizontal: 16,
        paddingTop: 16,
        gap: 4,
    },

    label: {
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

    collapseView: {
        position: 'absolute',
        padding: 16,
        width: '100%',
    },

    collapseButton: {
        gap: 8,
        padding: 2,
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

    rowView: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 22,
    },

    subRowView: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    ratingView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },

    icon15: {
        fontSize: 16,
        padding: 6,
        color: color.mediumDark,
    },

    detailHeader: {
        padding: 16,
        borderBottomWidth: 0.3,
        borderColor: color.bgMedium,
    },

    //review view
    reviewView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    reviewText: {
        fontSize: 12,
        color: color.lightDark,
    },

    reviewSection: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 24,
    },

    userAvatar: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        borderRadius: 20,
        marginRight: 6,
    },

    userName: {
        fontSize: 14,
        fontWeight: '500',
        color: color.mediumDark,
    },

    classify: {
        fontSize: 10,
        fontWeight: '500',
        color: color.lightDark,
    },

    review: {
        fontSize: 14,
        color: color.mediumBlack,
    },

    dateView: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    dateText: {
        fontSize: 12,
        color: color.lightDark,
    },

    shopResponseButton: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },

    //similar product view
    similarProductTitle: {
        paddingTop: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 11,
    },

    line1Height: {
        marginTop: 1,
        width: '100%',
        height: 1,
        backgroundColor: color.grayLight,
    },

    similarProductView: {
        paddingVertical: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //buy view
    buySection: {
        backgroundColor: color.bgWhite,
        ...shadow,
    },

    priceView: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    quantityChange: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    changeQuantityButton: {
        fontSize: 20,
        color: color.green,
        padding: 5,
        paddingHorizontal: 10,
    },

    number: {
        fontSize: 16,
        fontWeight: '600',
        color: color.black,
    },

    buyButton: {
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 8,
    },
});
