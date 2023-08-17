import React from 'react';
import UserContainer from './UserContainer';

const UserScreen = ({navigation}) => {
    const userContainerProps = {
        navigation,
    };
    return <UserContainer {...userContainerProps} />;
};

export default UserScreen