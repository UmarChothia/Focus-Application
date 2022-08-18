import React from "react";
import { View, StyleSheet } from "react-native";
import { Countdown } from '../components/countdown';

export const Timer = ({focusTask}) => (
  <View style={styles.container}>
    <View style={styles.countdown}>
      <Countdown isPaused onProgress={() => {}} onEnd={() => {}}/>
    </View>
    <View style={styles.buttonWrapper}>

    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  }
})