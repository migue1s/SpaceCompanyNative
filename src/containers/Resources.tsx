import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useResources} from '../hooks';
import {ResourceType} from '../types';

const Resources = () => {
  const data = useResources();

  return (
    <View>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

export default Resources;

const styles = StyleSheet.create({});
