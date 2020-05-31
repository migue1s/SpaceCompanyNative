import React, {useEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {ResourceDetailScreenRouteProp} from '..';
import {useResource} from '../hooks';
import ThemedView from '../components/ThemedView';
import ResourceSummary from '../components/ResourceSummary';

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
    <ThemedView style={{padding: 8}}>
      <ResourceSummary type={resource.id} />
    </ThemedView>
  );
};

export default ResourceDetail;
