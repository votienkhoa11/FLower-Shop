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
        marginTop: 12,
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
        marginVertical: 8,
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
        height: 340,
        opacity: 0,
    },

    modalStyle: {
        justifyContent: 'flex-end',
        margin: 0,
    },

    //filter view
    filterView: {
        height: 600,
        paddingHorizontal: 16,
        paddingBottom: 24,
        backgroundColor: color.bgWhite,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        gap: 28,
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

    //classify and rating style
    classifyList: {
        paddingVertical: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    itemCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 0.3,
        borderRadius: 50,
        marginVertical: 4,
        gap: 4,
    },

    itemText: {
        fontSize: 14,
        letterSpacing: 0.16,
    },

    starIcon: {
        fontSize: 14,
    },

    //price range style
    sliderView: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color.bgWhite,
        backgroundColor: color.green,
    },

    sliderLabel: {
        position: 'absolute',
        marginTop: 24,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        paddingLeft: 28,
    },

    labelPriceView: {
        marginTop: 34,
    },

    priceText: {
        fontSize: 14,
        letterSpacing: 0.16,
        color: color.mediumBlack,
    },

    colorList: {
        //flexDirection: 'column',
    },

    colorCard: {
        width: 171,
        flexDirection: 'row',
        gap: 8,
        marginVertical: 8,
        marginHorizontal: 8,
        //justifyContent: 'center',
        alignItems: 'center',
    },

    circleColor: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.11)',
    },

    //done button
    doneButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.green,
        borderRadius: 8,
    },

    doneText: {
        paddingVertical: 12,
        fontSize: 16,
        fontWeight: '500',
        color: color.bgWhite,
    },
});
