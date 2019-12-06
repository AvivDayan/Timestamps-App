import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import { addTimeStamp } from '../Utils/AsyncStorageHelper';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Image source={require('../../assets/react-native.png')} />
      <Button
        title="go to timestamps"
        onPress={() => {
          addTimeStamp(new Date());
          navigation.navigate('List');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50
  }
});

export default HomeScreen;

