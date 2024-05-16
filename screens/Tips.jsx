import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';
import Tamil from './Tamil'
import sinhala from './sinhala'
import English from './English'


const Tips = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Image style={{ position: 'absolute', width: '100%', height: '100%' }} source={require('../assets/BG2.png')} />
      <View style={styles.content}>
        <Text>Choose your language</Text>
        <View style={styles.buttonsContainer}>
          <Button title="Tamil" color="#841584"  onPress={() => navigation.navigate('Tamil')} />
          <View style={styles.buttonGap}></View>
          <Button title="Tamil" color="#841584"  onPress={() => navigation.navigate(English)} />
          <View style={styles.buttonGap}></View>
          <Button title="Tamil" color="#841584"  onPress={() => navigation.navigate(sinhala)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'colum',
    marginTop: 20,
  },
  buttonGap: {
    height: 20, 
  },
});

export default Tips;
