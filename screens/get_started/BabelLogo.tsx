import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BabelLogo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo} />
      <Text style={styles.text}>Babel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '50%', // Adjust the value as desired
  },
  logo: {
    width: 80,
    height: 80,
    backgroundColor: '#E57373',
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default BabelLogo;
