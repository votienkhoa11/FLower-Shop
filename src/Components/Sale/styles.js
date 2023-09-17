import { StyleSheet } from 'react-native';

//color
import { color } from '../../values/color';

export default StyleSheet.create({
    salePNG: {
        resizeMode: 'stretch',
        width: 70,
        height: 25,
    },

    saleIcon: {
        flex: 1,
        position: 'absolute',
        paddingTop: 2,
        paddingRight: 6,
        alignItems: 'center',
        alignContent: 'center',
    },

    saleText: {
        fontSize: 10,
        fontWeight: '500',
        color: color.bgWhite,
    },
});
