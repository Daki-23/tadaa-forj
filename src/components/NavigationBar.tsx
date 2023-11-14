import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function NavigationBar({
  handleButtonPress,
}: {
  handleButtonPress: (buttonName: string) => void;
}): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Icon
          name="home"
          size={24}
          color="red"
          onPress={() => handleButtonPress('home')}
          style={styles.icon}
        />
      </View>
      <View style={styles.section}>
        <Icon
          name="search"
          size={24}
          color="green"
          onPress={() => handleButtonPress('search')}
          style={styles.icon}
        />
      </View>
      <View style={styles.section}>
        <Icon
          name="user"
          size={24}
          color="blue"
          onPress={() => handleButtonPress('user')}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgrey',
    paddingTop: 10,
    paddingBottom: 10,
  },
  section: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
});

export default NavigationBar;
