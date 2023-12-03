// SearchButton.tsx
import React, {useState, useRef} from 'react';
import {
  Animated,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

const SearchButton: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [width] = useState(new Animated.Value(50)); // Initial width for the button
  const inputRef = useRef(null); // Create a reference to the TextInput component

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(width, {
      toValue: 300, // Width of the text box
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
        <TextInput ref={inputRef} style={styles.input} onBlur={handleBlur} /> // Add the ref prop to the TextInput component
      ) : (
        <TouchableOpacity onPress={handleFocus}>
          <Text style={styles.buttonText}>Search</Text>
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
  },
  buttonText: {
    color: '#000',
  },
});

export default SearchButton;
