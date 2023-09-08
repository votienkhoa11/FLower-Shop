import { StyleSheet, StatusBar } from 'react-native';
import { color } from '../../DefaultStyles';

export default StyleSheet.create({
    //search bar
    header: {
        marginTop: StatusBar.currentHeight + 16,
        paddingHorizontal: 16,
        paddingBottom: 12,
    },

    backIcon: {
        fontSize: 17,
        padding: 4,
    },

    label: {
        fontSize: 16,
        fontWeight: '600',
    },

    searchLabelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    searchFilterBar: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },

    searchIcon: {
        fontSize: 16,
        padding: 4,
    },

    xIcon: {
        fontSize: 18,
        padding: 4,
        color: color.lightDark,
        marginRight: 8,
    },

    searchBar: {
        width: 314,
        borderWidth: 0,
        borderRadius: 8,
        backgroundColor: color.bgLight,
    },

    filterIconContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.bgLight,
        borderRadius: 8,
    },

    resultLabelView: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    numberResults: {
        fontSize: 12,
        letterSpacing: 0.32,
        color: color.mediumDark,
    },

    //result list view
    resultCard: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 16,
        borderRadius: 8,
        shadowColor: color.black,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
        backgroundColor: color.bgWhite,
    },

    productImage: {
        width: 107,
        height: 107,
        margin: 4,
        resizeMode: 'cover',
        borderRadius: 8,
    },

    resultName: {
        fontSize: 16,
        fontWeight: '600',
        color: color.black,
        flexWrap: 'wrap',
    },

    information: {
        flex: 1,
        margin: 8,
        gap: 8,
    },

    priceView: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },

    price: {
        fontSize: 12,
        fontWeight: '600',
        color: color.mediumBlack,
    },

    oldPrice: {
        fontSize: 10,
        color: color.gray,
        textDecorationLine: 'line-through',
    },

    description: {
        fontSize: 12,
        letterSpacing: 0.32,
        color: color.mediumBlack,
        flexWrap: 'wrap',
    },

    addIconView: {
        justifyContent: 'flex-end',
    },

    addIcon: {
        paddingHorizontal: 10,
        paddingVertical: 14,
        fontSize: 17,
        color: color.green,
    },

    //empty view
    emptyView: {
        flex: 1,
        marginTop: 64,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 28,
    },

    noResult: {
        fontSize: 20,
        fontWeight: 'bold',
        color: color.lightDark,
    },

    footer: {
        height: 200,
        opacity: 0,
    },

    modalStyle: {
        justifyContent: 'flex-end',
        margin: 0,
    },

    filterView: {
        height: 600,
        paddingHorizontal: 16,
        paddingBottom: 24,
        backgroundColor: color.bgWhite,
        borderRadius: 20,
        gap: 30,
    },

    homeIndicatorView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    homeIndicator: {
        marginVertical: 8,
        height: 5,
        width: 42,
        backgroundColor: color.black,
        borderRadius: 3,
    },

    doneButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.green,
    },

    doneText: {
        paddingVertical: 12,
        fontSize: 16,
        fontWeight: '500',
        color: color.bgWhite,
    },
});
