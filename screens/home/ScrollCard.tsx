import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface ScrollCardProps {
  data: {
    title: string;
  };
  type?: string;
}

const ScrollCard: React.FC<ScrollCardProps> = ({data}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: 'path_to_your_image'}} />
      <Text style={styles.title}>{data.title}</Text>
      {/* Add other details like author, chapters, duration as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 120,
    margin: 10,
    backgroundColor: 'white',
    // Add more styling as per the screenshot
  },
  image: {
    width: 100,
    height: 100,
    // Add more styling as per the screenshot
  },
  title: {
    fontSize: 16,
    // Add more styling as per the screenshot
  },
  // Add other styles for author, chapters, duration
});

export default ScrollCard;
