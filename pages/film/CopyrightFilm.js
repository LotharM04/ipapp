import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import CustomNav from '../../Components/CustomNav';
import CustomButton from '../../Components/CustomButton';
import CustomInfo from '../../Components/CustomInfo';
import ReadMoreConfig from '../../Components/ReadMoreConfig';
import info from '../../model/dummy.json';

const CopyrightFilm = () => {
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
      onChangeScroll(-37);
      onScrollView(true);
    }
  };

  return (
    <View style={styles.container}>
      <CustomNav
        title="FILM COPYRIGHT"
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
        {scrollView ? (
          <></>
        ) : (
          <Image
            source={require('../../assets/images/CanadaFilm.jpeg')}
            style={styles.imageContainer}
          />
        )}
        <CustomButton btnText="Copyright" btnColor="#ed3237" selected />
        <CustomButton btnText="Trademark" btnColor="#ed3237" spacing={scroll} />
        <CustomButton btnText="Patents" btnColor="#96989A" spacing={scroll} />
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
  imageContainer: {
    alignSelf: 'center',
    width: '90%',
    height: 140,
    backgroundColor: 'grey',
    marginTop: 10,
  },
});

export default CopyrightFilm;
