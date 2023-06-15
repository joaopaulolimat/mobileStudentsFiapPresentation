import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const Details: React.FC = ({route}: any) => {
  const {details} = route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 20}}>
        <Text style={{fontSize: 20, marginBottom: 30}}>{details.name}</Text>
        <Text>{details.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Details;
