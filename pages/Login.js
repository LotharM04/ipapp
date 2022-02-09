import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {
  Colors,
  StyledLoginContainer,
  PageLogo,
} from '../assets/styles/styles';
import RNPickerSelect from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
  const [number, onChangeNumber] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  const placeholder = {
    label: 'English',
    value: 'English',
    color: 'white',
  };

  return (
    <StyledLoginContainer>
      <View style={styles.logoContainer}>
        <PageLogo source={require('../assets/images/logos/ipapp_logo.png')} />
      </View>
      <View style={styles.middle}>
        <Text style={styles.labelText}>SELECT LANGUAGE:</Text>
        <View style={styles.dropdownContainer}>
          <RNPickerSelect
            placeholder={placeholder}
            style={pickerSelectStyles}
            onValueChange={(value) => console.log(value)}
            items={[
              { key: 'A1', label: 'Afrikaans', value: 'Afrikaans' },
              { key: 'S1', label: 'Sepedi', value: 'Sepedi' },
              { key: 'S2', label: 'Sesotho', value: 'Sesotho' },
              { key: 'S3', label: 'Setswana', value: 'Setswana' },
              { key: 'S4', label: 'siSwati', value: 'siSwati' },
              { key: 'T1', label: 'Tshivenda', value: 'Tshivenda' },
              { key: 'I1', label: 'isiNdebele', value: 'isiNdebele' },
              { key: 'I2', label: 'isiXhosa', value: 'isiXhosa' },
              { key: 'I3', label: 'isiZulu', value: 'isiZulu' },
              { key: 'X1', label: 'Xitsonga', value: 'Xitsonga' },
            ]}
            Icon={() => {
              return (
                <Chevron
                  size={2.5}
                  color="white"
                  style={{ marginTop: 5, marginRight: 5 }}
                />
              );
            }}
          />
        </View>
        <Text style={styles.labelText}>LOGIN</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Username"
          placeholderTextColor="lightgrey"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="lightgrey"
        />
        <View style={styles.fixToText}>
          <Pressable onPress={() => console.log('forgot password')}>
            {({ pressed }) => (
              <Text style={styles.titleText}>Forgot Password</Text>
            )}
          </Pressable>
          <SubmitButton title="SUBMIT" />
        </View>
      </View>
      <View style={styles.bottom}>
        <AppButton title="Create Profile" />
      </View>
    </StyledLoginContainer>
  );
};

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const SubmitButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainerOne}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: `${Colors.darkGrey}`,
    borderRadius: 3,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: `${Colors.yellow}`,
    color: 'white',
    margin: 0,
    padding: 2,
  },
  logoContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
  },
  top: {
    flex: 0.4,
  },
  middle: {
    flex: 0.3,
    padding: 10,
  },
  bottom: {
    flex: 0.2,
    padding: 10,
  },
  input: {
    height: 35,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: `${Colors.grey}`,
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    color: '#fff',
  },
  custominput: {
    height: 35,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    backgroundColor: `${Colors.darkGrey}`,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: `${Colors.yellow}`,
  },
  labelText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#fff',
  },
  titleText: {
    fontSize: 17,
    marginLeft: 10,
    color: '#fff',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: `${Colors.darkGrey}`,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: `${Colors.yellow}`,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  appButtonContainerOne: {
    elevation: 8,
    backgroundColor: `${Colors.yellow}`,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  dropdownContainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: `${Colors.darkGrey}`,
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: `${Colors.yellow}`,
    borderRadius: 5,
    color: 'white',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: `${Colors.darkGrey}`,
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: `${Colors.yellow}`,
    borderRadius: 5,
    color: 'white',
    paddingRight: 30,
  },
  iconContainer: {
    top: 5,
    right: 15,
  },
});

export default Login;
