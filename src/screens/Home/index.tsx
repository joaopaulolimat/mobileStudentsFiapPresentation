import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Avatar} from '../../components';
import {JoaoAvatar} from '../../assets/images';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.line}>
        <Avatar name="Bruno" image={JoaoAvatar} />
        <Avatar name="Giuliano" image={JoaoAvatar} />
      </View>
      <View style={styles.line}>
        <Avatar name="João Paulo" image={JoaoAvatar} />
        <Avatar name="Renato" image={JoaoAvatar} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  line: {
    margin: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
