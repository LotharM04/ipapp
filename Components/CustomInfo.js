import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const CustomInfo = ({ stripColor, heading, info, readmore }) => {
  const shadowOffsetWidth = 0;
  const shadowRadius = 0;
  const shadowOpacity = 1.0;
  return (
    <View>
      <View
        style={[
          styles.infoSection,
          {
            shadowOffset: {
              width: shadowOffsetWidth,
              height: -5,
            },
            shadowOpacity,
            shadowRadius,
          },
          { shadowColor: stripColor },
        ]}
      />
      <ScrollView style={[styles.textsquare]}>
        {heading !== undefined ? (
          <Text style={styles.headingtext}>{heading}</Text>
        ) : (
          <></>
        )}
        <Text style={styles.innertext}>{info}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  infoSection: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    height: 40,
    width: '90%',
    marginTop: 180,
  },
  headingtext: {
    marginBottom: 10,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innertext: {
    fontSize: 14,
    fontWeight: '500',
  },
  textsquare: {
    alignSelf: 'center',
    backgroundColor: 'white',
    height: '100%',
    width: '86%',
    marginTop: -30,
  },
});

export default CustomInfo;
