// App.tsx
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import GetStarted from './screens/get_started/GetStarted';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from './screens/login/SignUpScreen';
import HomeScreen from './screens/home/HomeScreen';

const Stack = createStackNavigator();

export type RootStackParamList = {
  GetStarted: undefined;
  SignUp: undefined;
  Home: undefined;
  // Add other screens here
};

function App(): JSX.Element {
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
