import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  TouchableOpacity,
  Dimensions,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

type TDetailsProps = {
  name: string;
  description: string;
};
export function Avatar({
  name,
  image,
  details,
}: {
  name: string;
  image: any;
  details: TDetailsProps;
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.centeredView}
      onPress={() => navigation.navigate('Details', {details})}>
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
    </TouchableOpacity>
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
