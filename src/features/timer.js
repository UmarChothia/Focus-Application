import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Countdown } from '../components/countdown';
import { RoundedButton } from '../components/button';

export const Timer = ({focusTask}) => {
  const [hasStarted, setHasStarted] = useState(false);;
  return (
  <View style={styles.container}>
    <View style={styles.countdown}>
    {/* Countdown timer isPaused if the countdown has not been started  */}
      <Countdown isPaused={!hasStarted} onProgress={() => {}} onEnd={() => {}}/>
    </View>
    <View style={styles.buttonWrapper}>
{/* if it isn't started, show us the start button - AND if it is started show us the pause button */}
      {!hasStarted && (<RoundedButton title="Go!" onPress={() => setHasStarted(true)}/>)}
     {hasStarted && (<RoundedButton title="pause" onPress={() => setHasStarted(false)}/>)}
    </View>
  </View>
  ); 
};

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
  }
})