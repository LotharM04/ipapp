import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const CustomNav = ({
  title,
  titleColor,
  subtitleColor,
  stripColor,
  fontSize,
  ...props
}) => {
  const shadowOffsetWidth = 0;
  const shadowRadius = 0;
  const shadowOpacity = 1.0;
  return (
    <View
      style={[
        styles.navsquare,
        {
          shadowOffset: {
            width: shadowOffsetWidth,
            height: 5,
          },
          shadowOpacity,
          shadowRadius,
        },
        {
          shadowColor: stripColor,
        },
      ]}
    >
      <View style={styles.fixToText}>
        <Text
          style={{
            fontSize: fontSize,
            fontWeight: 'normal',
            paddingLeft: 25,
            fontWeight: '500',
            color: titleColor,
            lineHeight: 30,
          }}
        >
          HOME{' '}
          <Text style={(styles.subnavtext, { color: subtitleColor })}>
            | {title}
          </Text>
        </Text>

        <Pressable onPress={() => console.log('menu')}>
          {({ pressed }) => (
            <Entypo
              name="menu"
              size={30}
              style={{ marginRight: 30 }}
              color="black"
            />
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navsquare: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    height: 40,

    width: '90%',
  },
  subnavtext: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'normal',
    paddingLeft: 30,
    color: '#fbcd09',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CustomNav;
