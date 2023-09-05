import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';

export const width = Dimensions.get('window').width;

export const color = {
    bgWhite: '#fff',
    bgMedium: '#dde1e6',
    bgLight: '#f2f4f8',
    lightDark: '#a8a8a8',
    mediumDark: '#525252',
    grayLight: '#d9d9d9',
    gray: '#343a3f',
    grayMedium: '#4d5358',
    blue: '#006bff',
    red: '#ff0033',
    redSale: '#f20000',
    black: '#161616',
    mediumBlack: '#21272a',
    green: '#36a46d',
    greenLight: '#7fdbad',
    greenDark: '#0e6027',
    greenWhite: '#edfff6',
    gold: '#CFCF00',
    brown: '#D49162',
    diamond: '#D7FEFF',
    opacity0Color: 'rgba(0,0,0,0)',
};

export const marginTop = Platform.OS === 'ios' ? '10%' : StatusBar.currentHeight;

export default StyleSheet.create({
    tabBarItemView: {
        height: 70,
        width: 72,
        paddingTop: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: color.green,
    },

    tabLabel: {
        marginTop: 8,
        fontSize: 10,
        fontWeight: '600',
    },

    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: color.bgWhite,
    },

    loadingContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: marginTop,
        backgroundColor: color.greenWhite,
    },

    padding16: {
        padding: 16,
    },

    buttonCart: {
        position: 'absolute',
        width: 51,
        height: 51,
        backgroundColor: color.bgWhite,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20,
        right: 20,
        borderRadius: 180,
        shadowColor: color.black,
        shadowOffset: {
            width: 8,
            height: 24,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },

    cartIcon: {
        flex: 1,
        fontSize: 16,
        color: color.black,
        alignContent: 'center',
        paddingVertical: 16,
    },

    numberCart: {
        position: 'absolute',
        width: 15,
        height: 15,
        backgroundColor: color.green,
        borderRadius: 180,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 8,
    },

    number: {
        fontSize: 10,
        fontWeight: '500',
    },

    shadow: {
        shadowColor: color.black,
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4,
},
});
