import React from 'react';
import {StyleSheet, View} from 'react-native';
import BottomNavigationBar from '../../components/BottomNavigationBar';
import HomeFeed from './HomeFeed';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <HomeFeed />
      <BottomNavigationBar
        handleButtonPress={(buttonName: string) => {
          console.log(buttonName);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
