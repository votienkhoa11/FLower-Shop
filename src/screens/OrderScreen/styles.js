import { StyleSheet, StatusBar } from 'react-native';
import { color } from '../../DefaultStyles';

export default StyleSheet.create({
    header: {
        marginTop: StatusBar.currentHeight,
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginBottom: 8,
        alignItems: 'center',
    },

    headerLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 8,
    },

    searchView: {
        flex: 1,
        alignItems: 'flex-end',
    },

    //search
    searchBar: {
        height: 40,
        marginHorizontal: 16,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: color.bgMedium,
        backgroundColor: color.bgLight,
    },

    searchInput: {
        flex: 1,
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

    //search filter
    historySearchListView: {
        flex: 1,
        width: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight + 92,
    },

    historySearchList: {
        width: '86%',
        backgroundColor: color.bgWhite,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    textSearch: {
        padding: 8,
    },

    //tab view styles
    tabBarNavigation: {
        flexDirection: 'row',
        backgroundColor: color.bgWhite,
        shadowColor: color.black,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },

    tabViewButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 85,
        height: 48,
        borderBottomColor: color.green,
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
        height: 20,
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
        width: 65,
        paddingVertical: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.greenLight,
        borderRadius: 40,
    },

    orderAgain: {
        fontSize: 12,
        fontWeight: 'bold',
        color: color.greenDark,
    },

    emptyView: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    emptyText: {
        fontSize: 16,
        fontWeight: '600',
        color: color.lightDark,
    },
});
