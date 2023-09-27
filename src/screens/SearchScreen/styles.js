import { StyleSheet, StatusBar } from 'react-native';
import { marginTop } from '../../DefaultStyles';
import { color } from '../../values/color';
import shadow from '../../values/shadow';

export default StyleSheet.create({
    //search bar
    header: {
        marginTop: marginTop,
        padding: 16,
    },

    searchLabel: {
        fontSize: 14,
        letterSpacing: 0.16,
        color: color.black,
        fontWeight: '600',
    },

    searchBar: {
        marginTop: 8,
        borderRadius: 40,
        backgroundColor: color.bgLight,
    },

    searchInput: {
        flex: 1,
        paddingLeft: 12,
    },

    searchIcon: {
        fontSize: 24,
        color: color.lightDark,
        gap: 10,
        paddingRight: 16,
    },

    //search filter
    historySearchListView: {
        flex: 1,
        width: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight + 88,
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

    //history & poplular search view
    historySearchView: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },

    labelView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingBottom: 8,
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.black,
    },

    clearText: {
        paddingTop: 3,
        opacity: 0.8,
        fontSize: 12,
    },

    searchResultView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    searchItem: {
        marginRight: 8,
        marginVertical: 8,
        borderRadius: 20,
    },

    searchText: {
        paddingVertical: 4,
        paddingHorizontal: 8,
    },

    //suggest search view
    suggestProductsView: {
        flexDirection: 'row',
    },

    suggestionCard: {
        width: 131,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        borderRadius: 10,
        backgroundColor: color.bgWhite,
        ...shadow,
    },

    imageProduct: {
        height: 124,
        width: 131,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    productName: {
        textAlign: 'center',
        padding: 8,
        fontSize: 12,
        fontWeight: '600',
        color: color.mediumBlack,
    },
});
