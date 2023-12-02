import React from 'react';
import {ScrollView} from 'react-native';
import ListSection from './ListSection';

const HomeFeed = () => {
  return (
    <ScrollView style={containerStyle}>
      <ListSection title="Popular Lists" type="list" />
      <ListSection title="Recommended Audiobooks" type="audiobook" />
    </ScrollView>
  );
};

const containerStyle = {
  flex: 1,
};

export default HomeFeed;
