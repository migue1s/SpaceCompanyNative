import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {ResourceDetailScreenRouteProp} from '..';
import {useResource} from '../hooks';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({});

const ResourceDetail = () => {
  const navigation = useNavigation();
  const {
    params: {resource: resourceId},
  } = useRoute<ResourceDetailScreenRouteProp>();
  const resource = useResource(resourceId);

  useEffect(() => {
    navigation.setOptions({title: resource.name});
  }, [navigation, resource.name]);

  return (
    <View>
      <Text>{JSON.stringify(resource, null, 2)}</Text>
    </View>
  );
};

export default ResourceDetail;
