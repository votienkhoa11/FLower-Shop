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

    searchIcon: {
        fontSize: 16,
        padding: 8,
    },

    xIcon: {
        fontSize: 20,
        padding: 8,
        color: color.lightDark,
        marginRight: 8,
    },

    searchBar: {
        borderWidth: 0,
        borderRadius: 8,
        backgroundColor: color.bgLight,
    },
});
