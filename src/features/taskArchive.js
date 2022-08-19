import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colours';
import { fontSizes, paddings } from '../utils/sizes';

export const TaskArchive = ({ archive }) => {
  if (!archive || !archive.length)
    return <Text style={styles.openingTitle}>Task Archive Empty...</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>✦ {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Task Archive:</Text>
      <FlatList data={archive} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    fontSize: 20,
    color: colors.darkGrey,
    paddingTop: 14,
    paddingLeft: 38,
  },
  title: {
    color: colors.darkGrey,
    fontSize: 15,
    // textAlign: 'center',
    fontWeight: 'bold',
    paddingLeft: 32,
  },
  openingTitle: {
    color: colors.darkGrey,
    fontSize: 15,
    // textAlign: 'center',
    fontWeight: 'bold',
    paddingLeft: 32,
    // paddingTop: 250,
  },
});
