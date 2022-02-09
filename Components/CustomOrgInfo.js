import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const CustomOrgInfo = ({ heading, info }) => {
  return (
    <View>
      <ScrollView style={[styles.textsquare]}>
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
    marginTop: 30,
  },
});

export default CustomOrgInfo;
