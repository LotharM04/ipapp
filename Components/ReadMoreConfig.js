import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const ReadMoreConfig = ({ scrollView, ...props }) => {
  return (
    <>
      <View style={styles.fixToText}>
        <View></View>
        <Pressable onPress={() => props.scrollToggle()}>
          {({ pressed }) => (
            <Text style={styles.readmore}>
              {scrollView ? 'READ LESS' : 'READ MORE...'}
            </Text>
          )}
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  readmore: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingRight: 30,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ReadMoreConfig;
