import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import ScrollCard from './ScrollCard';

interface ListSectionProps {
  title: string;
  type: string;
}

const ListSection: React.FC<ListSectionProps> = ({title, type}) => {
  // Dummy data for the cards
  const cardsData = Array.from({length: 10}, (_, i) => ({
    id: i,
    title: `Title ${i + 1}`,
    author: `Author ${i + 1}`,
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
          <ScrollCard key={card.id} data={card} type={type} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 5,
  },
});

export default ListSection;
