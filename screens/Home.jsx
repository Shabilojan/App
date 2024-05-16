import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import Menu from './Menu';
import { useEffect } from 'react';



const Home = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(Menu);
    }, 5000); // 10 seconds delay

    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, []);
  return (
    <View style={styles.container}>
        <Image style={{ position: 'absolute', width: '100%', height: '100%' }}
        source={require('../assets/Bg.png')}
      />
      <Image style={{ alignItems: 'center' }} 
        source={require('../assets/Dr 1.png')}
      />
      
      <Text style={{ color: 'white', textAlign: 'center', fontWeight: '800', fontSize: 15, marginLeft: 25, marginTop: 80 }}>Green Tech Investors</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
