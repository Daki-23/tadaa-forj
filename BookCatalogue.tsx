import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

const BookCatalogue = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Catalogue</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.bookContainer}>
          <Text style={styles.bookTitle}>Book 1</Text>
        </View>
        <View style={styles.bookContainer}>
          <Text style={styles.bookTitle}>Book 2</Text>
        </View>
        <View style={styles.bookContainer}>
          <Text style={styles.bookTitle}>Book 3</Text>
        </View>
        {/* Add more book items as needed */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bookContainer: {
    width: 120,
    height: 180,
    backgroundColor: '#e0e0e0',
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookCatalogue;
