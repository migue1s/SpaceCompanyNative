import React from 'react';
import {Text, View} from 'react-native';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';

const ListHeading = ({children}: {children: string}) => {
  return (
    <ThemedView style={{padding: 8}}>
      <ThemedText variant="body">{children} ▼</ThemedText>
    </ThemedView>
  );
};

export default ListHeading;
