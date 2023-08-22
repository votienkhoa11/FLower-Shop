import { StyleSheet } from 'react-native';
import { width } from '../../DefaultStyles';
//color
import { color } from '../../DefaultStyles';

export const styles = StyleSheet.create({
   //flat list imageview
    imageView: {
        width: width,
        height: 210,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 12,
        overflow: 'hidden',
    },

    dotView: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    dotIndicators: {
        backgroundColor: color.greenLight,
        height: 8,
        borderRadius: 5,
        marginHorizontal: 2,
    },
});
