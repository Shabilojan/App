import React, { useState, useEffect } from 'react';
import { Button, Text, SafeAreaView, ScrollView, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function OpenCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={{ position: 'absolute', width: '100%', height: '100%' }} source={require('../assets/BG2.png')} />
      <ScrollView>
        <View style={styles.cameraContainer}>
          <Camera style={styles.camera} type={type}>
            <View style={styles.buttonContainer}>
              <Button
                title="Flip"
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              />
            </View>
          </Camera>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => console.log('Camera button pressed')}>
        <View style={styles.cambtn}></View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  camera: {
    width: 340,
    height: 450,
    alignSelf: 'center',
    marginTop: 160,
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: 350,
  },
  cambtn: {
    marginBottom: 150,
    width: 80,
    height: 80,
    borderRadius: 50, // Make it round
    backgroundColor: 'white', // Example background color
    alignSelf: 'center',
  }
});
