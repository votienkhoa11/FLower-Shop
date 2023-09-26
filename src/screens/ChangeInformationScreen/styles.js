import { StyleSheet } from 'react-native';
import { marginTop } from '../../DefaultStyles';
import { color } from '../../values/color';

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
        color: color.mediumLight,
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

    //phone style
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

    //gender modal style
    modalStyle: {
        justifyContent: 'flex-end',
        margin: 0,
        padding: 0,
    },

    downIcon: {
        fontSize: 24,
        color: color.mediumLight,
        paddingRight: 6,
    },

    genderItem: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.bgWhite,
        borderBottomWidth: 1,
        borderColor: color.mediumLight,
    },

    genderText: {
        fontSize: 16,
        fontWeight: '400',
        color: color.mediumBlack,
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
