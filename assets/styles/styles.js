import React from 'react';
import styled, { css } from 'styled-components/native';
//import styled from 'styled-components/native'
import { View, Text, Image } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  yellow: '#fbcd09',
  green: '#9bd2ad',
  grey: '#abacaf',
  black: '#000000',
  white: '#ffffff',
  darkGrey: '#404244',
  backgroundGrey: '#6d6e70',
};

const { yellow, green, grey, black, white, darkGrey, backgroundGrey } = Colors;

export const AuthButton = styled.Button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

export const Button = styled.Button`
  background: ${darkGrey};
  border-radius: 3px;
  border: 2px solid ${yellow};
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${white};
`;

export const StyledLoginContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${backgroundGrey};
  opacity: 1;
  padding: 20px;
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const SplashPageLogo = styled.Image`
  width: 250px;
  height: 250px;
`;

export const PageLogo = styled.Image`
  width: 200px;
  height: 200px;
`;

export const OrgLogo = styled.Image``;

// backgroundImage: {
//   flex: 1,
//   width: '100%',
//   height: '100%',
//   resizeMode: 'cover',
// }
