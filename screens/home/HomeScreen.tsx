import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import HomeFeed from './HomeFeed';
import SearchButton from '../../components/SearchButton';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <Text style={styles.title}>Hello, friend</Text>
          <HomeFeed />
        </>
      </TouchableWithoutFeedback>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={20}
        style={styles.searchButtonContainer}>
        <SearchButton />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 30,
  },
  searchButtonContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
});

export default HomeScreen;
