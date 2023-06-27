import {View, Text, TextInput, KeyboardAvoidingView,
  TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import React, { useState } from 'react';

//import styles
import { color } from '../../styles';
import defaultStyles from '../../styles';
import styles from './signUpStyle';

//import icon
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

//import function
import signUp from './functions';

const Signup = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={defaultStyles.container}>
      <StatusBar backgroundColor={color.bgWhite} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={defaultStyles.backButton} >
          <Ionicons name="chevron-back" size={28} color={color.dark} />
        </View>
        <View style={styles.header}>
          <Text style={defaultStyles.headerText}>Meu Shop{'\n\n'}Sign up</Text>
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
            {/*comfirm password form*/}
            <View style={defaultStyles.input}>
              <Ionicons name="key-outline" style={defaultStyles.iconForm} />
              <TextInput
                value={confirmPassword}
                secureTextEntry={true}
                onChangeText={setConfirmPassword}
                autoCapitalize="none"
                style={defaultStyles.textInput}
                placeholder="Enter your password again"
                placeholderTextColor={color.bgLight}
              />
            </View>
            {/*user email form*/}
            <View style={defaultStyles.input}>
              <Fontisto name="email" style={defaultStyles.iconForm} />
              <TextInput
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                style={defaultStyles.textInput}
                placeholder="Enter your email"
                placeholderTextColor={color.bgLight}
              />
            </View>
            {/*user's phone form*/}
            <View style={defaultStyles.input}>
              <AntDesign name="phone" style={defaultStyles.iconForm} />
              <TextInput
                value={phone}
                onChangeText={setPhone}
                autoCapitalize="none"
                keyboardType="numeric"
                style={defaultStyles.textInput}
                placeholder="Enter your phone"
                placeholderTextColor={color.bgLight}
              />
            </View>
          </View>
          <View style={defaultStyles.button}>
            {/*Submit button*/}
            <TouchableOpacity
              style={defaultStyles.submitButton}
              onPress={() => signUp(username, password, confirmPassword, email, phone)}
              >
              <Text style={defaultStyles.submitText}>Sign Up</Text>
            </TouchableOpacity>
            {/*Draw line with 'or'*/}
            <View style={defaultStyles.lineSection}>
              <View style={defaultStyles.drawLine}/>
              <Text style={defaultStyles.orText}>or</Text>
              <View style={defaultStyles.drawLine}/>
            </View>
            {/*Navigate to sign up screen*/}
            <TouchableOpacity
              onPress={() => navigation.navigate('login')}
              style={defaultStyles.navigateButton}
            >
              <Text style={defaultStyles.navigateText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Signup;
