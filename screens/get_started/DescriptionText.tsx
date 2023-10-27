import React from 'react';
import { Text, StyleSheet } from 'react-native';

function DescriptionText(): JSX.Element {
  return <Text style={styles.text}>This is the description text.</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20, // Adjust the gap size as desired
  },
});

export default DescriptionText;