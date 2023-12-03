import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import ScrollCard from './ScrollCard';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface ListSectionProps {
  title: string;
  type: string;
}

const ListSection: React.FC<ListSectionProps> = ({title}) => {
  // Dummy data for the cards
  const cardsData = Array.from({length: 5}, (_, i) => ({
    id: i,
    title: `Book ${Math.random().toString(36).substring(7)}`,
    coverImagePath: `${i + 1}`,
    author: `Author ${Math.random().toString(36).substring(7)}`,
    chapters: Math.floor(Math.random() * 30),
    duration: `${Math.floor(Math.random() * 40) + 10}h ${Math.floor(
      Math.random() * 60,
    )}m`,
  }));

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cardsData.map(card => (
          <ScrollCard key={card.id} data={card} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: windowWidth * 0.04,
    marginTop: windowHeight * 0.03,
    marginBottom: windowHeight * 0.03,
  },
});

export default ListSection;
