import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {ResourceDetailScreenRouteProp} from '..';
import {useResource} from '../hooks';

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
