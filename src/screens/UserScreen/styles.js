import { StyleSheet } from 'react-native';
import { marginTop } from '../../DefaultStyles';
import { color } from '../../values/color';
import shadow from '../../values/shadow';

export default StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: color.greenWhite,
    },

    userProfile: {
        marginTop: marginTop,
        paddingTop: 16,
        alignItems: 'center',
        gap: 6,
    },

    avatarContainer: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100 / 2,
        backgroundColor: color.bgWhite,
        ...shadow,
    },

    avatar: {
        width: 95,
        height: 95,
        resizeMode: 'cover',
        borderWidth: 3,
        borderRadius: 95 / 2,
        borderColor: color.green,
    },

    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.black,
    },

    memberView: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    infoText: {
        fontSize: 14,
        color: color.black,
    },

    changeButtonContainer: {
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: marginTop + 16,
        paddingRight: 16,
    },

    changeButton: {
        borderRadius: 15,
        ...shadow,
    },

    changeIcon: {
        padding: 8,
    },

    label: {
        fontSize: 14,
        paddingHorizontal: 16,
        color: color.black,
        fontWeight: '500',
    },

    button: {
        flex: 1,
    },

    buttonView: {
        flexDirection: 'row',
        padding: 14,
        alignItems: 'center',
        gap: 8,
    },

    buttonIcon: {
        fontSize: 16,
        color: color.gray,
    },

    labelButton: {
        fontSize: 14,
        color: color.gray,
        paddingBottom: 2,
    },
});
