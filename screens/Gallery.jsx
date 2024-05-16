import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function Gallery() {
  const navigation = useNavigation(); // Access navigation object

  const [image, setImage] = useState(null);

  useEffect(() => {
    const pickImage = async () => {
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
    };

    pickImage(); // Call pickImage function when component mounts
  }, [navigation]); // Pass navigation as a dependency to useEffect

  return (
    <View style={styles.container}>
    <Image style={{ position: 'absolute', width: '100%', height: '100%' }} source={require('../assets/BG2.png')} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 340,
    height: 410,
    alignSelf: 'center',
    marginTop: 100,
    marginHorizontal:20,
  },
});
