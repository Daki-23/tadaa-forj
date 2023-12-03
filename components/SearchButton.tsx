// SearchButton.tsx
import React, {useState, useRef} from 'react';
import {
  Animated,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const SearchButton: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [width] = useState(new Animated.Value(50)); // Initial width for the button
  const inputRef = useRef(null); // Create a reference to the TextInput component

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(width, {
      toValue: Dimensions.get('window').width - 40, // Width of the text box relative to the screen size
      duration: 100, // Animation duration
      useNativeDriver: false,
    }).start(() => {
      if (inputRef.current) {
        (inputRef.current as TextInput).focus(); // Focus the TextInput component
      }
    });
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(width, {
      toValue: 50, // Width of the button
      duration: 100, // Animation duration
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View style={[styles.container, {width}]}>
      {isFocused ? (
        <TextInput ref={inputRef} style={styles.input} onBlur={handleBlur} />
      ) : (
        <TouchableOpacity onPress={handleFocus} style={styles.button}>
          <AntDesignIcon name="search1" size={20} color="#000" />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 25,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    borderColor: '#A9A9A9', // color of the border
    borderWidth: 3, // width of the border
    borderRadius: 25, // radius for the rounded corners
  },
  buttonText: {
    color: '#000',
  },
  button: {
    flexDirection: 'row', // To align the icon and the text horizontally
    alignItems: 'center', // To center the icon and the text vertically
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0, // Horizontal shadow offset
      height: 2, // Vertical shadow offset
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow blur radius
  },
});

export default SearchButton;
