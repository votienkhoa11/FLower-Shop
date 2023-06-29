import { StyleSheet, StatusBar } from 'react-native';

import { width } from '../../styles';
//color
import { color } from '../../styles';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: color.bgWhite,
    },

    header: {
        width: '100%',
        flexDirection: 'row',
        marginTop: StatusBar.currentHeight,
    },

    headerText: {
        fontSize: 14,
        letterSpacing: 0.16,
        color: '#161616',
        fontWeight: '600',
    },

    frame8: {
        width: 270,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 8,
    },

    icon24px: {
        fontSize: 26,
        padding: 8,
    },

    address: {
        fontSize: 14,
        letterSpacing: 0.16,
        color: '#525252',
        flexShrink: 1,
        padding: 1,
        opacity: 0.7,
    },

    iconView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 38,
        marginVertical: 0,
    },

    search: {
        flexDirection: 'row',
        padding: 1,
        backgroundColor: color.bgWhite,
        alignItems: 'center',
        flex: 1,
        borderRadius: 8,
    },

    searchIcon: {
        paddingRight: 4,
    },

    eventView: {
        width: width - 20,
        height: 210,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
    },

    imageEvent: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 12,
        overflow: 'hidden',
    },

    dotView: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    dotIndicators: {
        
    },
});
