import { View, Image } from 'react-native';
import React from 'react';

import styles from './styles';

const Avatar = ({source}) => {
    const defaultAvatar = require('../../DefaultStyles/imgs/user/avatar.jpg');

  return (
    <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={defaultAvatar} />
    </View>
  );
};

export default Avatar;
