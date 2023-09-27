import { StyleSheet, StatusBar } from 'react-native';
import { marginTop } from '../../DefaultStyles';
import { color } from '../../values/color';
import shadow from '../../values/shadow';

export default StyleSheet.create({
    header: {
        marginTop: marginTop,
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
        marginHorizontal: 16,
        marginBottom: 16,
        paddingHorizontal: 8,
        borderRadius: 40,
        borderColor: color.bgMedium,
        backgroundColor: color.bgLight,
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
        ...shadow,
    },

    textSearch: {
        padding: 8,
    },

    //tab view styles
    tabBarNavigation: {
        flexDirection: 'row',
        backgroundColor: color.bgWhite,
        shadowColor: color.black,
    },

    tabViewButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 85,
        height: 48,
        borderBottomColor: color.green,
    },

    animatedText: {
        fontSize: 14,
        position: 'absolute',
        color: color.green,
        borderBottomWidth: 2,
        borderColor: color.green,
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
        backgroundColor: color.bgWhite,
        ...shadow,
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
