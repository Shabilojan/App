import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import Scan from './Scan';

export default function Gallery() {
  const navigation = useNavigation(); // Access navigation object
  const [image, setImage] = useState(null);
  const [isPickerOpen, setIsPickerOpen] = useState(true); // Track if picker is open

  useEffect(() => {
    const pickImage = async () => {
      setIsPickerOpen(true); // Picker is open
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      } else {
        // Navigate back to the menu screen when image picker is canceled
        navigation.navigate('Menu');
      }

      setIsPickerOpen(false); // Picker is closed
    };

    pickImage(); // Call pickImage function when component mounts
  }, [navigation]); // Pass navigation as a dependency to useEffect

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={require('../assets/BG2.png')} />
      {image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.topLeftCorner} />
          <View style={styles.topRightCorner} />
          <View style={styles.bottomLeftCorner} />
          <View style={styles.bottomRightCorner} />
        </View>
      )}
      {!isPickerOpen && (
        <View style={styles.buttonContainer}>
          <Button title="Scan" color="#841584" onPress={() => navigation.navigate(Scan)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    position: 'relative',
    width: 340,
    height: 400,
    alignSelf: 'center',
    marginTop: 10,
    marginHorizontal: 20,
  },

  image: {
    width: '100%',
    height: '100%',
  },
  topLeftCorner: {
    position: 'absolute',
    top: -10,
    left: -10,
    width: 50,
    height: 50,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#000',
  },
  topRightCorner: {
    position: 'absolute',
    top: -10,
    right: -10,
    width: 50,
    height: 50,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: '#000',
  },
  bottomLeftCorner: {
    position: 'absolute',
    bottom: -10,
    left: -10,
    width: 50,
    height: 50,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#000',
  },
  bottomRightCorner: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    width: 50,
    height: 50,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: '#000',
  },
  buttonContainer: {
    marginTop: 80,
    alignItems: 'center',
  },
});


