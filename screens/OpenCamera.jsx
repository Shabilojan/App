import React, { useState, useEffect } from 'react';
import { Button, Text, SafeAreaView, ScrollView, StyleSheet, Image, View, Platform } from 'react-native';
import { Camera } from 'expo-camera';

export default function OpenCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
    width:340,
    height:400,
    alignSelf:'center',
    marginTop:40,
  },
  camera: {
    
    width:340,
    height:400,
    alignSelf:'center',
    
    
  },
  buttonContainer: {
   
    alignSelf:'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
});
