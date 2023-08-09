import { StyleSheet, StatusBar } from 'react-native';
import { color } from '../../DefaultStyles';

export default StyleSheet.create({
    header: {
        paddingTop: StatusBar.currentHeight,
        backgroundColor: color.bgWhite,
        shadowColor: color.black,
        shadowOffset: {
            width: 0,
            height: 24,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 4,
    },

    imageView: {
        padding: 16,
    },

    productImage: {
        width: 358,
        height: 330,
        resizeMode: 'cover',
        borderRadius: 12,
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

    dotView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 10,
        backgroundColor: color.green,
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
        gap: 2,
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

});
