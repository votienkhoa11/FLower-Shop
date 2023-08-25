import { StyleSheet, StatusBar } from 'react-native';
import { color, marginTop } from '../../DefaultStyles';

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
        height: 40,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: color.bgMedium,
        backgroundColor: color.bgLight,
    },

    searchInput: {
        flex: 1,
        paddingLeft: 12,
    },

    searchBarIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 4,
        paddingHorizontal: 12,
    },

    closeIcon: {
        padding: 4,
        marginRight: 4,
        opacity: 0.6,
        paddingLeft: 5,
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
    },

    label: {
        paddingBottom: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: color.black,
    },

    clearText: {
        marginBottom: 5,
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
        backgroundColor: color.bgLight,
        borderWidth: 0.3,
        borderColor: color.bgMedium,
    },

    searchText: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        fontSize: 14,
        color: color.green,
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

    //result list view
    resultCard: {
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

    nameCard: {
        width: '100%',
        paddingBottom: 8,
        borderBottomColor: color.bgLight,
        borderBottomWidth: 1,
    },

    descriptionCard: {
        width: '100%',
        flex: 1,
        gap: 4,
    },

    description: {
        fontSize: 12,
        letterSpacing: 0.32,
        color: color.mediumBlack,
        flexWrap: 'wrap',
    },

    price: {
        paddingVertical: 4,
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 0.32,
        color: color.mediumBlack,
    },
});
