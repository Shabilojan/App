import React from 'react';
import { View, StyleSheet, Image } from 'react-native';


const Menu = () => {

  return (
    <View style={styles.container}>
    <Image style={{ position: 'absolute', width: '100%', height: '100%' }}
    source={require('../assets/BG2.png')}/>      
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
});

export default Menu;
