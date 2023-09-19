import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
import { color } from '../values/color';

export const width = Dimensions.get('window').width;

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
