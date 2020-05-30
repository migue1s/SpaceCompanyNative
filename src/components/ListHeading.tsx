import React from 'react';
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
