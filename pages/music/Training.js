import React, { useState } from 'react';
import { Text, View, StyleSheet, Slider } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

const Training = () => {
  const shadowOffsetWidth = 0;
  const shadowRadius = 0;
  const shadowOpacity = 1.0;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.navsquare,
          {
            shadowOffset: {
              width: shadowOffsetWidth,
              height: 8,
            },
            shadowOpacity,
            shadowRadius,
          },
        ]}
      >
        <Text style={styles.navtext}>
          HOME <Text style={styles.subnavtext}>| E-TRAINING</Text>
        </Text>
      </View>
      <View
        style={[
          styles.navsquare1,
          {
            shadowOffset: {
              width: shadowOffsetWidth,
              height: -8,
            },
            shadowOpacity,
            shadowRadius,
          },
        ]}
      />
      <View style={[styles.textsquare]}>
        <Text style={styles.innertext}>
          The music industry consists of the individuals and organizations that
          earn money by writing songs and musical compositions, creating and
          selling recorded music and sheet music, presenting concerts, as well
          as the organizations that aid, train, represent and supply music
          creators.
        </Text>
      </View>
      <View
        style={[
          styles.selectedsquare,
          {
            shadowOffset: {
              width: shadowOffsetWidth,
              height: 8,
            },
            shadowOpacity,
            shadowRadius,
          },
        ]}
      >
        <Text style={styles.selectedtext}>The Business of Music</Text>
      </View>
      <View
        style={[
          styles.square1,
          {
            shadowOffset: {
              width: shadowOffsetWidth,
              height: 8,
            },
            shadowOpacity,
            shadowRadius,
          },
        ]}
      >
        <Text style={styles.text}>Artist Management</Text>
      </View>
      <View
        style={[
          styles.square1,
          {
            shadowOffset: {
              width: shadowOffsetWidth,
              height: 8,
            },
            shadowOpacity,
            shadowRadius,
          },
        ]}
      >
        <Text style={styles.text}>Import & Export</Text>
      </View>
      <View
        style={[
          styles.square1,
          {
            shadowOffset: {
              width: shadowOffsetWidth,
              height: 8,
            },
            shadowOpacity,
            shadowRadius,
          },
        ]}
      >
        <Text style={styles.text}>Financial Management</Text>
      </View>
      <View
        style={[
          styles.squareback,
          {
            shadowOffset: {
              width: shadowOffsetWidth,
              height: 8,
            },
            shadowOpacity,
            shadowRadius,
          },
        ]}
      >
        <Text style={styles.text}>Back</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'space-around',
    paddingTop: 60,
    backgroundColor: '#ffffff',
    padding: 8,
  },
  square: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    height: 30,
    shadowColor: '#fbcd09',
    width: '75%',
    marginTop: 100,
  },
  square1: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    height: 30,
    shadowColor: '#fbcd09',
    width: '75%',
    marginTop: 30,
  },
  navsquare: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    height: 40,
    shadowColor: '#abacaf',
    width: '90%',
  },
  navsquare1: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    height: 40,
    shadowColor: '#abacaf',
    width: '90%',
    marginTop: 180,
  },
  selectedsquare: {
    alignSelf: 'center',
    backgroundColor: '#fbcd09',
    borderRadius: 60,
    height: 40,
    shadowColor: '#fbcd09',
    width: '80%',
    marginTop: 10,
  },
  textsquare: {
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 150,
    width: '85%',
    marginTop: -20,
  },
  squareback: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    height: 30,
    shadowColor: '#fbcd09',
    width: '75%',
    marginTop: 70,
  },
  controls: {
    paddingHorizontal: 12,
  },
  text: {
    marginBottom: 10,
    fontSize: 17,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  navtext: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'normal',
    paddingLeft: 30,
    fontWeight: '500',
  },
  subnavtext: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'normal',
    paddingLeft: 30,
    color: '#fbcd09',
  },
  selectedtext: {
    marginTop: 12,
    fontSize: 17,
    fontWeight: 'normal',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  innertext: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Training;
