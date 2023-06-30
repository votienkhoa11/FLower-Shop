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

    addressLabel: {
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
        width: width,
        height: 210,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 32,
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
        backgroundColor: color.greenLight,
        height: 8,
        borderRadius: 5,
        marginHorizontal: 2,
    },

    category: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8,
    },

    categoryCard: {
        width: 88,
        height: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 8,
    },

    categoryImage: {
        width: 75,
        height: 75,
        resizeMode: 'cover',
        borderRadius: 10,
    },

    categoryName: {
        paddingTop: 8,
        fontSize: 10,
        fontWeight: '500',
        color: color.black,
        alignContent: 'center',
        textAlign: 'center',
    },

    popular: {
        paddingLeft: 0,
        paddingVertical: 10,
        marginVertical: 8,
    },

    label: {
        fontSize: 16,
        color: color.black,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        paddingBottom: 8,
    },

    popularCard: {
        backgroundColor: color.bgWhite,
        borderRadius: 10,
        shadowColor: color.black,
        shadowOffset: {
            width: 20,
            height: 24,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },

    popularImage: {
        height: 122.8,
        width: 116,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    title: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        paddingHorizontal: 10,
    },

    titleText: {
        fontSize: 11,
        fontWeight: '500',
        color: color.black,
        letterSpacing: 0.16,
    },
});
