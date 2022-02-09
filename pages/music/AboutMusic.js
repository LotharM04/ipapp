import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomNav from '../../Components/CustomNav';
import CustomButton from '../../Components/CustomButton';
import CustomInfo from '../../Components/CustomInfo';
import info from '../../model/dummy.json';

const AboutMusic = () => {
  return (
    <View style={styles.container}>
      <CustomNav
        title="MUSIC"
        titleColor="black"
        subtitleColor="#fbcd09"
        stripColor="#abacaf"
        fontSize={20}
      />
      <View style={styles.middle}>
        <CustomInfo stripColor="#abacaf" info={info.data} />
      </View>
      <View style={styles.bottom}>
        <CustomButton btnText="About Music" btnColor="#fbcd09" selected />
        <CustomButton btnText="Music Organizations" btnColor="#fbcd09" />
        <CustomButton btnText="Copyright" btnColor="#fbcd09" />
        <CustomButton btnText="Royalties" btnColor="#fbcd09" />
        <CustomButton btnText="Music Distribution" btnColor="#fbcd09" />
        <CustomButton btnText="Online Training" btnColor="#fbcd09" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#ffffff',
    padding: 8,
  },
  middle: {
    flex: 0.47,
  },
  bottom: {
    flex: 0.5,
  },
});

export default AboutMusic;
