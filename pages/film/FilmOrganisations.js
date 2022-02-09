import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import CustomNav from '../../Components/CustomNav';
import CustomButton from '../../Components/CustomButton';
import CustomOrgInfo from '../../Components/CustomOrgInfo';
import ReadMoreConfig from '../../Components/ReadMoreConfig';
import info from '../../model/dummy.json';

const FilmOrganisations = () => {
  const [scroll, onChangeScroll] = React.useState(13);
  const [scrollView, onScrollView] = React.useState(false);
  const [topFlex, onChangeTopFlex] = React.useState(0.25);
  const [bottomFlex, onChangeBottomFlex] = React.useState(0.75);
  const shadowOffsetWidth = 0;
  const shadowRadius = 0;
  const shadowOpacity = 1.0;

  const scrollToggle = () => {
    if (scrollView) {
      onChangeTopFlex(0.25);
      onChangeBottomFlex(0.75);
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
        title="FILM ORGANISATIONS"
        titleColor="black"
        subtitleColor="#ed3237"
        stripColor="black"
        fontSize={18}
      />
      <View
        style={[
          styles.selectedsquare,
          { backgroundColor: '#ed3237', zIndex: 1 },
        ]}
      >
        <Text style={styles.selectedtext}>
          What Organisation are in the Film?
        </Text>
      </View>
      <View style={{ flex: topFlex }}>
        <CustomOrgInfo
          heading={'What is the film industry about?'}
          info={info.filmData}
        />
      </View>
      <View style={{ flex: bottomFlex }}>
        <ReadMoreConfig scrollToggle={scrollToggle} scrollView={scrollView} />
        {scrollView ? (
          <></>
        ) : (
          <>
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
                { shadowColor: '#ed3237' },
              ]}
            />

            <Text style={styles.headingtext}>FILM ORGANISATIONS</Text>
            <Image
              source={require('../../assets/images/orgs/nvfv.png')}
              style={styles.imageContainer}
            />
            <Image
              source={require('../../assets/images/orgs/SAGA.png')}
              style={styles.imageContainer}
            />
            <Image
              source={require('../../assets/images/orgs/SAGE.png')}
              style={styles.imageContainer}
            />
          </>
        )}
        <View style={{ flex: 0.1 }}>
          <Text style={styles.buttontext}>SCROLL DOWN FOR MORE</Text>
          <View
            style={[
              styles.infoSectionV2,
              {
                shadowOffset: {
                  width: shadowOffsetWidth,
                  height: 5,
                },
                shadowOpacity,
                shadowRadius,
              },
              { shadowColor: '#96989A' },
            ]}
          />
        </View>
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
    width: '100%',
    height: 100,
    marginTop: 20,
  },
  infoSection: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    height: 40,
    width: '90%',
    marginTop: 40,
  },
  infoSectionV2: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    height: 40,
    width: '90%',
    marginTop: 60,
  },
  headingtext: {
    marginTop: -30,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttontext: {
    marginBottom: -90,
    fontSize: 14,
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    paddingTop: 20,
  },
  selectedsquare: {
    alignSelf: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 40,
    width: '80%',
    marginTop: 5,
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

export default FilmOrganisations;
