import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GetStarted = ({onPress}: {onPress: () => void}) => {
  return (
    <View style={styles.container}>
      {/* Content Container */}
      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logo} />
          <Text style={styles.logoText}>Babel</Text>
        </View>

        {/* Description Text */}
        <Text style={styles.descriptionText}>
          Million Books are waiting for you. Let's explore the world together
        </Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 0.5, // <-- This occupies half of the screen's height
    justifyContent: 'flex-start', // <-- This centers the content vertically
    alignItems: 'center',
    width: '100%', // Make sure it spans the width of the screen
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    backgroundColor: '#E57373',
    borderRadius: 10,
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20, // <-- Adjust this value to play with vertical positioning
    marginHorizontal: 20,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GetStarted;
