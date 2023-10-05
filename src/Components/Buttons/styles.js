import { StyleSheet } from 'react-native';

import { color } from '../../values/color';
import shadow from '../../values/shadow';

export default StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonCart: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderRadius: 26,
        ...shadow,
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
});
