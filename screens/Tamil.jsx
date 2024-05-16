import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  View
} from 'react-native';

const Tamil = () => {
  return (
    <View style={styles.container}>
    <Image style={{ position: 'absolute', width: '100%', height: '100%' }} source={require('../assets/BG2.png')} />
    <SafeAreaView>

      <ScrollView style={styles.scrollView}>

        <Text style={styles.heading}>
        How to protect from
        the Dieseases naturedly
        </Text>

        <Image style={{ width: 150, height: 150, marginLeft:20 }} source={require('../assets/Pic.png')} />

        <Text style={styles.text}>
        Promote good growing conditions:
          Spacing and airflow:
          Plant potatoes with ample space between rows and plants.
          This allows for better air circulation and dries morning dew faster,
          reducing moisture that blight thrives in.

          Sunlight and wind:
          Choose an open field with good sunlight exposure and prevailing wind.
          This discourages moisture build-up on leaves.

          Watering:
          Water deeply but infrequently, aiming for the base of the
          plant rather than overhead watering.

          Resistant varieties:
          Select potato varieties known for blight resistance.

          Early harvest:
          Consider harvesting early potatoes before peak blight season,
          especially for personal consumption (may not be suitable for large-scale farming).

        </Text>
      </ScrollView>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
   

  },
  scrollView: {
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    marginHorizontal: 10,
    width: 350,
    alignSelf: 'center',
    height: 700,
    marginVertical: 100,
    borderRadius: 10,
  },
  
  heading:{
    fontSize: 25,
    padding:10,
    textAlign:'center',
    fontWeight:'bold',

  },

  text: {
    fontSize: 20,
    padding:20,
  },
});

export default Tamil;