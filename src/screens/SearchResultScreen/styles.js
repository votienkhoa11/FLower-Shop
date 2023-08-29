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
        padding: 8,
    },

    xIcon: {
        fontSize: 18,
        padding: 8,
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
