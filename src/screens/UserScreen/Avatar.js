import { View, Image } from 'react-native';
import React from 'react';

import styles from './styles';

const Avatar = ({source}) => {
    const defaultAvatar = 'data:image/png;base64,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';

  return (
    <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{uri: defaultAvatar}} />
    </View>
  );
};

export default Avatar;
