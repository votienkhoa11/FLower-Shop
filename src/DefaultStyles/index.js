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
});
