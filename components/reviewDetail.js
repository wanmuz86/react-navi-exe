import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ReviewDetail({navigation}) {
  return (
    <View style={styles.container}>
      <Text>{navigation.getParam('item').name}</Text>
      <Text>{navigation.getParam('item').rating}</Text>
      <Text>{navigation.getParam('item').review}</Text>
      <Button title="Go back" onPress={()=>navigation.goBack()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
