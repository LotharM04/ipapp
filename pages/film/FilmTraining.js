import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import CustomNav from '../../Components/CustomNav';
import CustomButton from '../../Components/CustomButton';
import CustomInfo from '../../Components/CustomInfo';
import ReadMoreConfig from '../../Components/ReadMoreConfig';
import info from '../../model/dummy.json';

const FilmTraining = () => {
  const [scroll, onChangeScroll] = React.useState(13);
  const [scrollView, onScrollView] = React.useState(false);
  const [topFlex, onChangeTopFlex] = React.useState(0.57);
  const [bottomFlex, onChangeBottomFlex] = React.useState(0.3);

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
        title="FILM E-TRAINING"
        titleColor="black"
        subtitleColor="#ed3237"
        stripColor="#96989A"
        fontSize={18}
      />
      <View style={{ flex: topFlex }}>
        <CustomInfo
          stripColor="#ed3237"
          heading="STUDY THE FILM BUSINESS"
          style={styles.headingtext}
        />
      </View>
      <View style={{ flex: bottomFlex }}>
        <CustomButton
          btnText="The Business of Film"
          btnColor="#ed3237"
          selected
        />
        <CustomButton
          btnText="Casting Management"
          btnColor="#ed3237"
          spacing={scroll}
        />
        <CustomButton
          btnText="Import & Export"
          btnColor="#ed3237"
          spacing={scroll}
        />
        <CustomButton
          btnText="Financial Management"
          btnColor="#96989A"
          spacing={scroll}
        />
      </View>
      <View style={{ flex: 0.15 }}>
        <Image
          source={require('../../assets/images/orgs/DepartmentButton.png')}
          style={{
            padding: 0,
            marginLeft: '10%',
            width: '80%',
            resizeMode: 'contain',
            height: 100,
          }}
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
  headingtext: {
    marginBottom: 10,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FilmTraining;
