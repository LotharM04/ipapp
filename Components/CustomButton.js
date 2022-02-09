import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CustomButton = ({ btnText, btnColor, selected, spacing }) => {
  const shadowOffsetWidth = 0;
  const shadowRadius = 0;
  const shadowOpacity = 1.0;

  return (
    <View
      style={
        selected === undefined
          ? [
              styles.square,
              {
                shadowOffset: {
                  width: shadowOffsetWidth,
                  height: 5,
                },
                shadowOpacity,
                shadowRadius,
              },
              { shadowColor: btnColor, marginTop: spacing },
            ]
          : [
              styles.selectedsquare,
              { shadowColor: btnColor, backgroundColor: btnColor, zIndex: 1 },
            ]
      }
    >
      <Text style={selected === undefined ? styles.text : styles.selectedtext}>
        {btnText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    padding: 8,
  },
  square: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    height: 40,
    width: '80%',
    //marginTop: -37,
  },
  selectedsquare: {
    alignSelf: 'center',
    borderRadius: 60,
    height: 40,
    width: '80%',
    marginTop: 10,
  },
  controls: {
    paddingHorizontal: 12,
  },
  text: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  selectedtext: {
    marginTop: 12,
    fontSize: 17,
    fontWeight: 'normal',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomButton;
