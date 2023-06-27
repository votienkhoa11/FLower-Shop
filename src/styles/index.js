import {StyleSheet} from 'react-native';

const color = {
  bgWhite: '#fff',
  mediumDark: '#303d49',
  bgMedium: '#636363',
  bgLight: '#b6b8b9',
  bgModal: 'rgba(0, 0, 0, 0.2)',
  bgBluePurple: '#5252ad',
  oceanBlue: '#34E2DC',
  darkBlue: '#20425F',
  blue: '#006bff',
  dark: '#000',
};

export {color};


const defaultStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.bgWhite,
  },

  backButton: {
    alignItems: 'center',
    marginTop: 2,
    marginRight: 340,
    marginLeft: 8,
    padding: 10,
  },

  header: {
    padding: 20,
    marginBottom: 80,
  },

  headerText: {
    color: color.dark,
    letterSpacing: 1,
    fontSize: 35,
    fontWeight: '500',
  },

  form: {
    padding: 20,
    paddingHorizontal: 30,
  },

  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: color.bgLight,
    marginBottom: 25,
  },

  iconForm: {
    fontSize: 20,
    color: color.dark,
    paddingRight: 4,
  },

  textInput: {
    flex: 1,
    paddingBottom: 5,
  },

  button: {
    paddingHorizontal: 30,
    marginBottom: 40,
  },

  submitButton: {
    marginTop: 15,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: color.blue,
    padding: 12,
  },

  submitText: {
    color: color.bgWhite,
    fontWeight: 'bold',
    fontSize: 15,
  },

  //this section is used for draw a line
  lineSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  drawLine: {
    flex: 1,
    height: 1,
    backgroundColor: color.bgLight,
  },

  orText: {
    padding: 5,
    alignItems: 'center',
    color: color.bgLight,
  },

  navigateButton: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: color.bgWhite,
    opacity: 0.2,
    padding: 12,
  },
});

export default defaultStyles;
