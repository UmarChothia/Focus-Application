import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/countdown';
import { RoundedButton } from '../components/button';
import { paddings } from '../utils/sizes';
import { colors } from '../utils/colours';
import { Timing } from './timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  // WE WANT IT TO VIBRATE 5 TIMES AFTER EACH SECOND ONCE THE TIMER IS COMPLETE
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusTask, clearTask }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  // setProgress is the same as (value) => setProgress(value)
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        {/* Countdown timer isPaused if the countdown has not been started  */}
        <Countdown
          minutes={minutes}
          isPaused={!hasStarted}
          onProgress={setProgress}
          onEnd={() => {
            Vibration.vibrate(PATTERN);
          }}
        />
        <View style={{ paddingTop: paddings.xl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusTask}</Text>
        </View>
      </View>
      <View style={{ paddingTop: paddings.sm }}>
        <ProgressBar
          progress={progress}
          color={'#9e9e9e'}
          style={{ height: 8 }}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing changeTime={setMinutes} />
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
      <View style={styles.resetWrapper}>
      <RoundedButton size={50} title="-" onPress={clearTask} />
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
  timingWrapper: {
    flex: 0.1,
    paddingTop: paddings.xxl,
    flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: paddings.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
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
