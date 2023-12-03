import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function BottomNavigationBar({
  handleButtonPress,
}: {
  handleButtonPress: (buttonName: string) => void;
}): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Icon
          name="home"
          size={30}
          color={styles.icon.color}
          onPress={() => handleButtonPress('home')}
          style={styles.icon}
        />
      </View>
      <View style={styles.section}>
        <Icon
          name="search1"
          size={30}
          color={styles.icon.color}
          onPress={() => handleButtonPress('search')}
          style={styles.icon}
        />
      </View>
      <View style={styles.section}>
        <Icon
          name="user"
          size={30}
          color={styles.icon.color}
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
    paddingTop: 15,
    paddingBottom: 15,
  },
  section: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'center',
    color: 'black',
  },
});

export default BottomNavigationBar;
