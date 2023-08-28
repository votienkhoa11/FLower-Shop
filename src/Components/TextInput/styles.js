import { StyleSheet } from 'react-native';

//color
import { color } from '../../DefaultStyles';

export default StyleSheet.create({
    textInput: {
        flex: 1,
        paddingLeft: 12,
    },

    containerAreaInput: {
        width: '100%',
        height: 40,
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: color.bgMedium,
    },
});
