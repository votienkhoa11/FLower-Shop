import Toast from 'react-native-root-toast';
import { color } from '../../DefaultStyles';

export const callToast = (msg) => {
    Toast.show(msg, {
      duration: Toast.durations.SHORT,
      position: -70,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      backgroundColor: color.black,
      textColor: color.bgWhite,
  });
};
