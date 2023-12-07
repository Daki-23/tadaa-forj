import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

interface ScrollCardProps {
  data: {
    id: number;
    title: string;
    coverImagePath: string;
    author: string;
  };
  type?: string;
}

const ScrollCard: React.FC<ScrollCardProps> = ({data}) => {
  // Use type as index to get image
  const image = images[parseInt(data.coverImagePath, 10) - 1];
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();


  const handleBookPress = () => {
    console.log('Book Id: ', data.id);
    navigation.navigate('BookPlayer', { bookId: data.id });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleBookPress}>
      {/* For remote images in S3 use: <Image source={{ uri: 'https://example.com/path/to/your/image.png' }} /> */}
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.author}>{data.author}</Text>
      {/* Add other details like chapters, duration as needed */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 200,
    backgroundColor: 'white',
    // Add more styling as per the screenshot
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
    // Add more styling as per the screenshot
  },
  title: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
    alignSelf: 'center',
    // Add more styling as per the screenshot
  },
  author: {
    fontSize: 14,
    marginTop: 2,
    textAlign: 'center',
    alignSelf: 'center',
    // Add more styling as per the screenshot
  },
  // Add other styles for chapters, duration
});

// Import images
const images = [
  require('../../assets/mock-book-covers/1.png'),
  require('../../assets/mock-book-covers/2.png'),
  require('../../assets/mock-book-covers/3.png'),
  require('../../assets/mock-book-covers/4.png'),
  require('../../assets/mock-book-covers/5.png'),
];

export default ScrollCard;
