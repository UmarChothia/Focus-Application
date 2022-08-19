import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/countdown';
import { RoundedButton } from '../components/button';
import { paddings } from '../utils/sizes';
import { colors } from '../utils/colours';

export const Timer = ({ focusTask }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(1);
// setProgress is the same as (value) => setProgress(value)
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        {/* Countdown timer isPaused if the countdown has not been started  */}
        <Countdown
          isPaused={!hasStarted}
          onProgress={setProgress}
          onEnd={() => {}}
        />
        <View style={{ paddingTop: paddings.xl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusTask}</Text>
        </View>
      </View>
      <View style={{paddingTop: paddings.sm}}>
        <ProgressBar
        progress={progress}
        color={'#9e9e9e'} style={{height:8}} 
        />
      </View>
      <View style={styles.buttonWrapper}>
        {/* if it isn't started, show us the start button - AND if it is started show us the pause button */}
        {!hasStarted && (
          <RoundedButton title="Go!" onPress={() => setHasStarted(true)} />
        )}
        {hasStarted && (
          <RoundedButton title="pause" onPress={() => setHasStarted(false)} />
        )}
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
  },
  title: {
    color: colors.darkGrey,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.darkGrey,
    textAlign: 'center',
    paddingTop: 4,
  },
});
