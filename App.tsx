// App.tsx
import React, { useEffect } from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import GetStarted from './screens/get_started/GetStarted';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from './screens/login/SignUpScreen';
import HomeScreen from './screens/home/HomeScreen';
import { BookPlayer } from './screens/book_player/BookPlayer';
import { setupPlayer } from './utils/trackPlayerServices';

const Stack = createStackNavigator();

export type RootStackParamList = {
  GetStarted: undefined;
  SignUp: undefined;
  Home: undefined;
  BookPlayer: { bookId: number };
  // Add other screens here
};

function App(): JSX.Element {

  useEffect(() => {
    setupPlayer();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GetStarted">
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{headerShown: false}}
          />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />    
          <Stack.Screen
            name="BookPlayer"
            component={BookPlayer}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
