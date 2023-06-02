import React from 'react';
import {View, Dimensions, Text, StyleSheet, Image} from 'react-native';

export function Avatar({name, image}: {name: string; image: any}) {
  return (
    <View style={styles.centeredView}>
      <Image
        source={image}
        resizeMode="contain"
        style={{
          borderRadius:
            Math.round(
              Dimensions.get('window').width + Dimensions.get('window').height,
            ) / 2,
          width: Dimensions.get('window').width * 0.4,
          height: Dimensions.get('window').width * 0.4,
        }}
      />
      <Text> {name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  centeredView: {alignItems: 'center', justifyContent: 'center'},
  line: {
    margin: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
