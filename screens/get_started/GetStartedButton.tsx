import React from 'react';
import {Button} from 'react-native';

const GetStartedButton = ({onPress}: {onPress: () => void}) => {
  return <Button title="Get Started" color="#E57373" onPress={onPress} />;
};

export default GetStartedButton;
