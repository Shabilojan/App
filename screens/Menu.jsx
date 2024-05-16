import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Tips from './Tips';
import Gallery from  './Gallery';
import OpenCamera from './OpenCamera';

const Menu = ({ navigation }) => {
  const handlePressCamera = () => {
    console.log('Camera clicked');
    navigation.navigate(OpenCamera);

  };

  const handlePressGallery = () => {
    navigation.navigate(Gallery);
  };

  return (
    <View style={styles.container}>
      <Image style={{ position: 'absolute', width: '100%', height: '100%' }} source={require('../assets/BG2.png')} />
      <View style={styles.container2}>
      <View style={styles.buttonGap}></View>
        <TouchableOpacity onPress={handlePressCamera}>
          <Image style={{ alignItems: 'center' }} source={require('../assets/camera.png')} />
        </TouchableOpacity>
        <View style={styles.buttonGap}></View>
        <TouchableOpacity onPress={handlePressGallery}>
          <Image style={{ alignItems: 'center' }} source={require('../assets/gallery.png')} />
        </TouchableOpacity>
        <View style={styles.buttonGap}></View>
        <TouchableOpacity onPress={() => navigation.navigate(Tips)}>
          <Image style={{ alignItems: 'center' }} source={require('../assets/tips.png')} />
        </TouchableOpacity>
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

  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  buttonGap: {
    height: 50, 
  },
});

export default Menu;
