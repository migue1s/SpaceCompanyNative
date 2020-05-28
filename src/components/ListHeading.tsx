import React from 'react';
import {Text, View} from 'react-native';

const ListHeading = ({children}: {children: string}) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default ListHeading;
