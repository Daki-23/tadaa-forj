import React from 'react';
import {ScrollView} from 'react-native';
import ListSection from './ListSection';

const HomeFeed = () => {
  return (
    <ScrollView style={containerStyle}>
      <ListSection title="Continue Where You Left Off" type="list" />
      <ListSection title="You Might Like" type="audiobook" />
    </ScrollView>
  );
};

const containerStyle = {
  flex: 1,
};

export default HomeFeed;
