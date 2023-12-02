import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

const SignUpScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSignUpWithGoogle = () => {
    // Implement Google Sign-Up Logic
  };

  const handleSignUpWithFacebook = () => {
    // Implement Facebook Sign-Up Logic
  };

  const handleSignUpWithEmail = () => {
    // Implement Email Sign-Up Logic
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignUpWithGoogle}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
      {/* You can implement the 'Continue with X' button similarly */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUpWithFacebook}>
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.emailButton]}
        onPress={handleSignUpWithEmail}>
        <Text style={styles.buttonText}>Continue with email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff', // Adjust the background color as needed
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#f0f0f0', // Adjust the button background color as needed
  },
  buttonText: {
    fontSize: 16,
    color: '#000', // Adjust the text color as needed
  },
  emailButton: {
    backgroundColor: '#e91e63', // Adjust the email button background color as needed
  },
});

export default SignUpScreen;
