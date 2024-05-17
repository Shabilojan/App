import React, { useState, useEffect, useRef } from 'react';
import { Button, Text, SafeAreaView, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation

export default function OpenCamera() {
  const navigation = useNavigation(); // Get navigation object
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false); // Track if preview is shown
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri);
      setShowPreview(true); // Show the preview after capturing
    }
  };

  const retakePicture = () => {
    setCapturedImage(null); // Reset captured image URI
    setShowPreview(false); // Hide the preview
  };

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
        {!showPreview && ( // Render camera view only if not showing the preview
          <Camera style={styles.camera} type={type} ref={cameraRef}>
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
                } } />
            </View>
          </Camera>
        )}
      </View>
      {!showPreview && ( // Hide cambtn while showing the preview
        <TouchableOpacity onPress={takePicture}>
          <View style={styles.cambtn}></View>
        </TouchableOpacity>
      )}
      {showPreview && capturedImage && ( // Show the preview and retake button
        <><View style={styles.previewContainer}>
          <Image source={{ uri: capturedImage }} style={styles.previewImage} />
          <View style={styles.previewOverlay}>
            <View style={styles.topLeftCorner} />
            <View style={styles.topRightCorner} />
            <View style={styles.bottomLeftCorner} />
            <View style={styles.bottomRightCorner} />
          </View>
          <TouchableOpacity onPress={retakePicture} style={styles.retakeButton}>
            <Text style={styles.retakeButtonText}>Retake</Text>
          </TouchableOpacity>
        </View><View style={styles.scanButtonContainer}>
            <Button title="Scan" color="#841584" onPress={() => navigation.navigate('Scan')} />
          </View></>
        
      )}
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
    height: 400,
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
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#000',
    flexDirection: 'row',
  },
  cambtn: {
    marginBottom: 160,
    width: 80,
    height: 80,
    borderRadius: 40, // Make it round
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  previewContainer: {
    position: 'absolute',
    top: 180,
    left: '50%',
    transform: [{ translateX: -170 }],
    width: 340,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  previewOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  retakeButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  retakeButtonText: {
    color: '#fff',
  },

  scanButtonContainer: {
    position: 'absolute',
    bottom: 170, // Adjust position as needed
    alignSelf: 'center',
    backgroundColor: 'transparent', // Make background transparent
  },
});
