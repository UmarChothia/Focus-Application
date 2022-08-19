import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/button';

export const Timing = ({ changeTime }) => {
  return (
    // <> </> This is a fragment in React, which allows us to define more elements/buttons in this case, without having to define them in the same view
    <>
      <View style={styles.timeButton}>
        <RoundedButton size={75} title="10" onPress={() => changeTime(10)} />
      </View>
      <View style={styles.timeButton}>
        <RoundedButton size={75} title="20" onPress={() => changeTime(20)} />
      </View>
      <View style={styles.timeButton}>
        <RoundedButton size={75} title="40" onPress={() => changeTime(40)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timeButton: {
    flex: 1,
    alignItems: 'center',
  },
});
