import React, {useEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {ResourceDetailScreenRouteProp} from '..';
import {useResource, useMachines} from '../hooks';
import ThemedView from '../components/ThemedView';
import ResourceSummary from '../components/ResourceSummary';
import {resourcesData} from '../data/resourcesData';
import {FlatList} from 'react-native-gesture-handler';
import ResourceMachine from '../components/ResourceMachine';

const ResourceDetail = () => {
  const navigation = useNavigation();
  const {
    params: {resource: resourceId},
  } = useRoute<ResourceDetailScreenRouteProp>();
  const resource = useResource(resourceId);
  const resourceMeta = resourcesData[resourceId];
  const machines = useMachines(resourceId);
  useEffect(() => {
    navigation.setOptions({title: resourceMeta.name});
  }, [navigation, resourceMeta.name]);

  return (
    <ThemedView style={{padding: 8, flex: 1}}>
      <FlatList
        ListHeaderComponent={<ResourceSummary type={resource.id} />}
        data={machines}
        renderItem={({item}) => (
          <ResourceMachine style={{paddingTop: 32}} type={item} />
        )}
      />
    </ThemedView>
  );
};

export default ResourceDetail;
