import React from 'react';
import {ScrollView, View, Text} from 'react-native';

function Feed({selectedButton}: {selectedButton: string}): JSX.Element {
  return (
    <ScrollView>
      <View>
        <Text>
          {selectedButton
            ? `Button "${selectedButton}" pressed`
            : 'Edit App.tsx to change this screen and then come back to see your edits.'}
        </Text>
      </View>
    </ScrollView>
  );
}

export default Feed;
