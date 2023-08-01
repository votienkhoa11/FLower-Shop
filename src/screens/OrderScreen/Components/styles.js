import { StyleSheet, StatusBar } from 'react-native';
import { color } from '../../DefaultStyles';

import { width } from '../../DefaultStyles';

export default StyleSheet.create({
    header: {
        marginTop: StatusBar.currentHeight,
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
    },

    headerLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },

    searchButton: {
        paddingHorizontal: 8,
        fontSize: 24,
    },

    buttonName: {
        fontSize: 14,
        color: color.gray,
    },
});
