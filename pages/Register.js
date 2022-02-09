import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { Colors, StyledContainer } from '../assets/styles/styles';
import RNPickerSelect from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';
import { Ionicons } from '@expo/vector-icons';

const Register = () => {
  const [number, onChangeNumber] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  const placeholder = {
    label: 'English',
    value: 'English',
    color: 'white',
  };

  return (
    <StyledContainer>
      <View style={styles.top}></View>
      <View style={styles.middle}>
        <Text style={styles.labelText}>PERSONAL DETAILS</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Name"
          placeholderTextColor="lightgrey"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Surname"
          placeholderTextColor="lightgrey"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Gender"
          placeholderTextColor="lightgrey"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Date of Birth"
          placeholderTextColor="lightgrey"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Title/Composer/Producer"
          placeholderTextColor="lightgrey"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Record Lablel"
          placeholderTextColor="lightgrey"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Email Address"
          placeholderTextColor="lightgrey"
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.labelText}>CREATE PROFILE</Text>
        <TextInput
          style={styles.custominput}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
          placeholder="Username"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.custominput}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.custominput}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
          placeholder="Repeat Password"
          placeholderTextColor="grey"
        />
        <View style={styles.fixToText}>
          <SubmitButton title="SUBMIT" />
        </View>
      </View>
    </StyledContainer>
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
  top: {
    flex: 0.15,
    padding: 10,
  },
  middle: {
    flex: 0.5,
    padding: 10,
  },
  bottom: {
    flex: 0.35,
    padding: 10,
  },
  input: {
    height: 35,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: `${Colors.grey}`,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#fff',
  },
  custominput: {
    height: 35,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    backgroundColor: 'lightgrey',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#61DBFB',
  },
  labelText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
    color: `${Colors.grey}`,
    marginBottom: 10,
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

export default Register;
