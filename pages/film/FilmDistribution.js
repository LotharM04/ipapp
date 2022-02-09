import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomNav from '../../Components/CustomNav';
import CustomButton from '../../Components/CustomButton';
import CustomInfo from '../../Components/CustomInfo';
import ReadMoreConfig from '../../Components/ReadMoreConfig';
import info from '../../model/dummy.json';

const FilmDistribution = () => {
  const [scroll, onChangeScroll] = React.useState(13);
  const [scrollView, onScrollView] = React.useState(false);
  const [topFlex, onChangeTopFlex] = React.useState(0.73);
  const [bottomFlex, onChangeBottomFlex] = React.useState(0.27);

  const scrollToggle = () => {
    if (scrollView) {
      onChangeTopFlex(0.73);
      onChangeBottomFlex(0.27);
      onChangeScroll(13);
      onScrollView(false);
    } else {
      onChangeTopFlex(0.85);
      onChangeBottomFlex(0.15);
      onChangeScroll(-37);
      onScrollView(true);
    }
  };

  return (
    <View style={styles.container}>
      <CustomNav
        title="FILM DISTRIBUTION"
        titleColor="black"
        subtitleColor="#ed3237"
        stripColor="#96989A"
        fontSize={18}
      />
      <View style={{ flex: topFlex }}>
        <CustomInfo
          stripColor="#ed3237"
          heading={'How to get your content put there'}
          info={info.filmData}
        />
      </View>
      <View style={{ flex: bottomFlex }}>
        <ReadMoreConfig scrollToggle={scrollToggle} scrollView={scrollView} />
        <CustomButton
          btnText="Digital Distribution"
          btnColor="#ed3237"
          selected
        />
        <CustomButton
          btnText="Physical Distribution"
          btnColor="#ed3237"
          spacing={scroll}
        />
        <CustomButton
          btnText="Alternate Platforms"
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

export default FilmDistribution;
