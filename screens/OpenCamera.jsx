import React, { useState, useEffect } from 'react';
import { Button, Text, SafeAreaView, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
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
      <Image style={styles.backgroundImage} source={require('../assets/BG2.png')} />
      <View style={styles.cameraContainer}>
        <Camera style={styles.camera} type={type}>
          <View style={styles.overlay}>
            <View style={styles.topLeftCorner} />
            <View style={styles.topRightCorner} />
            <View style={styles.bottomLeftCorner} />
            <View style={styles.bottomRightCorner} />
          </View>
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
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 180,
  },
  camera: {
    width: 340,
    height: 450,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLeftCorner: {
    position: 'absolute',
    top: -10,
    left: -10,
    width: 50,
    height: 50,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#00FF00',
  },
  topRightCorner: {
    position: 'absolute',
    top: -10,
    right: -10,
    width: 50,
    height: 50,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: '#00FF00',
  },
  bottomLeftCorner: {
    position: 'absolute',
    bottom: -10,
    left: -10,
    width: 50,
    height: 50,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#00FF00',
  },
  bottomRightCorner: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    width: 50,
    height: 50,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: '#00FF00',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  cambtn: {
    marginBottom: 120,
    width: 80,
    height: 80,
    borderRadius: 40, // Make it round
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});

