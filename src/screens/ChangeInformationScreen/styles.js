import { StyleSheet } from 'react-native';
import { marginTop } from '../../DefaultStyles';
import { color } from '../../values/color';

import { width } from '../../DefaultStyles';

export default StyleSheet.create({
    //header view
    header: {
        width: '45%',
        padding: 16,
        marginTop: marginTop,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    headerText: {
        fontSize: 16,
        fontWeight: '500',
        color: color.black,
    },

    avatarView: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    changeButtonContainer: {
        width: 25,
        height: 25,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 92,
        marginLeft: 216,
        borderRadius: 30 / 2,
        backgroundColor: color.bgWhite,
    },
    //inputs view
    inputList: {
        padding: 8,
        paddingHorizontal: 16,
        gap: 20,
    },

    inputView: {
        paddingVertical: 8,
    },

    input: {
        height: 48,
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: color.bgWhite,
    },

    labelInput: {
        height: 21,
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: color.bgWhite,
        paddingHorizontal: 4,
        marginLeft: 14,
        marginBottom: 10,
        gap: 4,
    },

    calendarIcon: {
        fontSize: 24,
        color: color.bgMedium,
        paddingRight: 8,
    },

    labelText: {
        color: color.mediumBlack,
        fontSize: 12,
    },

    starText: {
        color: color.red,
        marginTop: 1,
        fontSize: 16,
    },

    errorText: {
        color: color.red,
        fontSize: 10,
        paddingLeft: 14,
    },

    codePhoneContainer: {
        height: 22,
        marginLeft: 12,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: color.bgMedium,
        borderRadius: 4,
    },

    textIconContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    codePhoneText: {
        fontSize: 12,
        fontWeight: 'normal',
        color: color.mediumBlack,
    },

    numberInput : {
        backgroundColor: color.bgWhite,
        paddingVertical: 0,
        paddingLeft: 0,
    },

    countryPickerModal: {
        modal: {
            height: '80%',
            width: '100%',
            justifyContent: 'center',
            alignSelf: 'center',
        },
        countryButtonStyles: {
            height: 40,
        },
    },

    buttonText: {
        fontSize: 14,
        textAlign: 'left',
        marginHorizontal: 0,
        paddingHorizontal: 4,
    },

    dropDown: {
        justifyContent: 'center',
        backgroundColor: color.bgWhite,
        paddingHorizontal: 0,
    },

    row: {
        height: 40,
    },

    downIcon: {
        position: 'absolute',
        fontSize: 24,
        color: color.bgMedium,
        marginTop: 12,
        marginLeft: width - 64,
    },

    //button
    saveButton: {
        width: 122,
        alignSelf: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        backgroundColor: color.green,
        marginBottom: 40,
    },

    saveText: {
        fontSize: 16,
        fontWeight: '500',
        color: color.bgWhite,
    },
});
