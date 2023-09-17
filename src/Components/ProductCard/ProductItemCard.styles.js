import { StyleSheet } from 'react-native';

//color
import { color } from '../../values/color';

export const styles = StyleSheet.create({
    //brought items view
    itemCard: {
        backgroundColor: color.bgWhite,
        borderRadius: 10,
        shadowColor: color.black,
        shadowOffset: {
            width: 20,
            height: 24,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },

    itemImage: {
        width: 168,
        height: 124,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    sale: {
        position: 'absolute',
        alignItems: 'center',
        marginVertical: 15,
        marginLeft: 4,
        width: 70,
        height: 25,
    },

    itemTitle: {
        width: 130,
        paddingVertical: 12,
        flexWrap: 'wrap',
    },

    titleText: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '500',
        flexWrap: 'wrap',
        color: color.black,
    },

    price: {
        paddingTop: 2,
        fontSize: 10,
        fontWeight: '500',
        color: color.mediumDark,
    },

    addIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
