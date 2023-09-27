import { StyleSheet } from 'react-native';

//color
import { color } from '../../values/color';

export default StyleSheet.create({
    textInput: {
        flex: 1,
        paddingLeft: 16,
        fontSize: 16,
    },

    containerAreaInput: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: color.mediumLight,
    },

    errorText: {
        color: color.red,
        fontSize: 10,
        paddingLeft: 14,
    },
});
