import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {LayoutChangeEvent} from 'react-native';

export default function Home() {
  const [viewHeight, setViewHeight] = useState(0);

  const deviceH = Dimensions.get('screen').height;
  const windowH = Dimensions.get('window').height;
  const bottomNavBarH = deviceH - windowH;
  const statusBarHeight = StatusBar.currentHeight || 24;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <View
        style={{
          margin: 24,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              borderRadius:
                Math.round(
                  Dimensions.get('window').width +
                    Dimensions.get('window').height,
                ) / 2,
              width: Dimensions.get('window').width * 0.4,
              height: Dimensions.get('window').width * 0.4,
              backgroundColor: 'red',
            }}
          />
          <Text> Bruno </Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              borderRadius:
                Math.round(
                  Dimensions.get('window').width +
                    Dimensions.get('window').height,
                ) / 2,
              width: Dimensions.get('window').width * 0.4,
              height: Dimensions.get('window').width * 0.4,
              backgroundColor: 'red',
            }}
          />
          <Text> Giuliano </Text>
        </View>
      </View>
      <View
        style={{
          margin: 24,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              borderRadius:
                Math.round(
                  Dimensions.get('window').width +
                    Dimensions.get('window').height,
                ) / 2,
              width: Dimensions.get('window').width * 0.4,
              height: Dimensions.get('window').width * 0.4,
              backgroundColor: 'red',
            }}
          />
          <Text> João </Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              borderRadius:
                Math.round(
                  Dimensions.get('window').width +
                    Dimensions.get('window').height,
                ) / 2,
              width: Dimensions.get('window').width * 0.4,
              height: Dimensions.get('window').width * 0.4,
              backgroundColor: 'red',
            }}
          />
          <Text> Renato </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    flexDirection: 'row',
  },
  titleContainer: {flexGrow: 1},
  title: {fontSize: 18},
  noteContainer: {padding: 16},
  noteButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  noteTitle: {color: '#000'},
  noteContent: {color: '#949494', overflow: 'scroll'},
  divider: {
    backgroundColor: '#949494',
    height: 1,
    flex: 1,
  },
});
