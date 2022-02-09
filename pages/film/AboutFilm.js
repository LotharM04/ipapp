import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomNav from '../../Components/CustomNav';
import CustomButton from '../../Components/CustomButton';
import CustomInfo from '../../Components/CustomInfo';
import ReadMoreConfig from '../../Components/ReadMoreConfig';
import info from '../../model/dummy.json';

const AboutFilm = () => {
  const [scroll, onChangeScroll] = React.useState(13);
  const [scrollView, onScrollView] = React.useState(false);
  const [topFlex, onChangeTopFlex] = React.useState(0.52);
  const [bottomFlex, onChangeBottomFlex] = React.useState(0.48);

  const scrollToggle = () => {
    if (scrollView) {
      onChangeTopFlex(0.52);
      onChangeBottomFlex(0.48);
      onChangeScroll(13);
      onScrollView(false);
    } else {
      onChangeTopFlex(0.85);
      onChangeBottomFlex(0.15);
      onChangeScroll(-39);
      onScrollView(true);
    }
  };

  return (
    <View style={styles.container}>
      <CustomNav
        title="FILM"
        titleColor="black"
        subtitleColor="#ed3237"
        stripColor="#96989A"
        fontSize={20}
      />
      <View style={{ flex: topFlex }}>
        <CustomInfo
          stripColor="#ed3237"
          heading={'What is the film industry about?'}
          info={info.filmData}
        />
      </View>
      <View style={{ flex: bottomFlex }}>
        <ReadMoreConfig scrollToggle={scrollToggle} scrollView={scrollView} />
        <CustomButton btnText="Film Background" btnColor="#ed3237" selected />
        <CustomButton
          btnText="Copyright Related Matters"
          btnColor="#ed3237"
          spacing={scroll}
        />
        <CustomButton
          btnText="Working Opportunities"
          btnColor="#ed3237"
          spacing={scroll}
        />
        <CustomButton btnText="Royalties" btnColor="#ed3237" spacing={scroll} />
        <CustomButton
          btnText="Sales & Distribution"
          btnColor="#ed3237"
          spacing={scroll}
        />
        <CustomButton
          btnText="Online Training"
          btnColor="#96989A"
          spacing={scroll}
        />
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
});

export default AboutFilm;
