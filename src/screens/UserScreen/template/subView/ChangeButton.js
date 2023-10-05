import React from 'react';
//import icons
import Entypo from 'react-native-vector-icons/Entypo';
//styles
import styles from '../../styles';
import { color } from '../../../../values/color';
//components
import Button from '../../../../Components/Buttons/Button';

const ChangeButton = ({onPress, style, iconSize}) => {
  return (
    <Button
        leftIcon={
            <Entypo name="edit" size={iconSize} style={styles.changeIcon} />
        }
        onPress={onPress}
        height={30}
        width={30}
        backgroundColor={color.bgWhite}
        style={style}
        activeOpacity={1}
    />
  );
};

export default ChangeButton;
