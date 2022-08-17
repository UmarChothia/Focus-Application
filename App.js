import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colours';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
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
    backgroundColor: colors.offWhite
  },
  text: {
    color: colors.darkGrey
  }
});
