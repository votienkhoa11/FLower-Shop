import { StyleSheet, StatusBar } from 'react-native';
import { color } from '../../DefaultStyles';

import { width } from '../../DefaultStyles';

export default StyleSheet.create({
    userProfile: {
        marginTop: 16,
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
        marginLeft: width - 16 - 24,
        borderRadius: 30 / 2,
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

    labelButton: {
        fontSize: 14,
        color: color.gray,
        paddingBottom: 2,
    },
});
