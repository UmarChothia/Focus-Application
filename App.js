import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colours';
import { Focus } from './src/features/focus';

export default function App() {
  const [currentTask, setCurrentTask] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {/* If there is no current task show us the focus feature OTHERWISE(:) show us a view for the timer */}
      {!currentTask ? (
        <Focus addTask={setCurrentTask} />
      ) : (
        <View>
          <Text style={{ color: colors.darkGrey }}>
            I am going to render the timer for {currentTask}{' '}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // backgroundColor: '#E1D9D1',
    // backgroundColor: 'linear-gradient(to bottom, rgba(7,27,82,1) 0%, rgba(0,128,128,1) 100%);',
    // backgroundColor: '#F8F0E3',
    backgroundColor: colors.offWhite,
  },
});
