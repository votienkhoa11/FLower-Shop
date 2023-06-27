import {View, Text, TextInput, KeyboardAvoidingView,
        TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import React, { useState } from 'react';

//import styles
import { color } from '../../styles';
import defaultStyles from '../../styles';

//import icon
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

//import functions
import login from './functions';
//import { clearItem } from './functions';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={defaultStyles.container}>
      <StatusBar backgroundColor={color.bgWhite} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} >
      <View style={defaultStyles.backButton} >
        <Ionicons name="chevron-back" size={28} color={color.dark} />
      </View>
        <View style={defaultStyles.header}>
          <Text style={defaultStyles.headerText}>Meu Shop{'\n\n'}Log in</Text>
        </View>
        <KeyboardAvoidingView>
          <View style={defaultStyles.form}>
            {/*user name form*/}
            <View style={defaultStyles.input}>
              <AntDesign name="user" style={defaultStyles.iconForm} />
              <TextInput
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                style={defaultStyles.textInput}
                placeholder="Enter your user name"
                placeholderTextColor={color.bgLight}
              />
            </View>
            {/*user password form*/}
            <View style={defaultStyles.input}>
              <Ionicons name="key-outline" style={defaultStyles.iconForm} />
              <TextInput
                value={password}
                secureTextEntry={true}
                onChangeText={setPassword}
                autoCapitalize="none"
                style={defaultStyles.textInput}
                placeholder="Enter your password"
                placeholderTextColor={color.bgLight}
              />
            </View>
          </View>
          <View style={defaultStyles.button}>
            {/*Submit button*/}
            <TouchableOpacity
              style={defaultStyles.submitButton}
              onPress={() => login(username, password)}
              >
              <Text style={defaultStyles.submitText}>Log in</Text>
            </TouchableOpacity>
            {/*Draw line with 'or'*/}
            <View style={defaultStyles.lineSection}>
              <View style={defaultStyles.drawLine}/>
              <Text style={defaultStyles.orText}>or</Text>
              <View style={defaultStyles.drawLine}/>
            </View>
            {/*Navigate to sign up screen*/}
            <TouchableOpacity
              onPress={() => navigation.navigate('signup')}
              style={defaultStyles.navigateButton}
            >
              <Text style={defaultStyles.navigateText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Login;
