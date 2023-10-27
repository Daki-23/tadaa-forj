// App.tsx
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import GetStarted from './screens/get_started/GetStarted';

function App(): JSX.Element {
  const handleGetStarted = () => {
    console.log('Get Started Pressed!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <GetStarted onPress={handleGetStarted} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
