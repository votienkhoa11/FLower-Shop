import { StyleSheet } from 'react-native';
import { color, marginTop } from '../../DefaultStyles';

import { width } from '../../DefaultStyles';

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
        shadowColor: color.black,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
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
        width: 30,
        height: 30,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
        marginTop: 55,
        marginLeft: width - 16 - 32,
        borderRadius: 15,
        backgroundColor: color.bgWhite,
        shadowColor: color.black,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },

    changeIcon: {
        fontSize: 14,
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
