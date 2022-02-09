import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomNav from '../../Components/CustomNav';
import CustomButton from '../../Components/CustomButton';
import CustomInfo from '../../Components/CustomInfo';
import ReadMoreConfig from '../../Components/ReadMoreConfig';
import info from '../../model/dummy.json';

const FilmRoyalties = () => {
  const [scroll, onChangeScroll] = React.useState(13);
  const [scrollView, onScrollView] = React.useState(false);
  const [topFlex, onChangeTopFlex] = React.useState(0.55);
  const [bottomFlex, onChangeBottomFlex] = React.useState(0.3);

  const scrollToggle = () => {
    if (scrollView) {
      onChangeTopFlex(0.55);
      onChangeBottomFlex(0.3);
      onChangeScroll(13);
      onScrollView(false);
    } else {
      onChangeTopFlex(0.82);
      onChangeBottomFlex(0.15);
      onChangeScroll(-37);
      onScrollView(true);
    }
  };

  return (
    <View style={styles.container}>
      <CustomNav
        title="FILM ROYALTIES"
        titleColor="black"
        subtitleColor="#ed3237"
        stripColor="#96989A"
        fontSize={20}
      />
      <View style={{ flex: 0.1 }}></View>
      <View style={{ flex: topFlex }}>
        <CustomInfo
          stripColor="#ed3237"
          heading={'What are film royalties?'}
          info={info.filmData}
          //sectionMargin={180}
        />
      </View>
      <View style={{ flex: bottomFlex }}>
        <ReadMoreConfig scrollToggle={scrollToggle} scrollView={scrollView} />
        <CustomButton
          btnText="Collecting Royalties"
          btnColor="#ed3237"
          selected
        />
        <CustomButton
          btnText="Types Royalties"
          btnColor="#ed3237"
          spacing={scroll}
        />
        <CustomButton
          btnText="Collecting Royalties"
          btnColor="#ed3237"
          spacing={scroll}
        />
        <CustomButton btnText="Legal" btnColor="#96989A" spacing={scroll} />
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

export default FilmRoyalties;
