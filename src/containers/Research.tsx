import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {ResourceType} from '../types';
import ResourceRow from '../components/ResourceRow';
import {useNavigation} from '@react-navigation/native';
import {useResearches} from '../hooks';
import ResearchCard from '../components/ResearchCard';
import {ResearchId} from '../data/researchData';
import ThemedView from '../components/ThemedView';

const Research = () => {
  const research = useResearches();
  const navigation = useNavigation();
  const onResourcePress = useCallback(
    (resource: ResourceType) => {
      navigation.navigate('ResourceDetail', {resource});
    },
    [navigation],
  );

  return (
    <ThemedView style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={
          <ResourceRow type={ResourceType.science} onPress={onResourcePress} />
        }
        data={research}
        renderItem={({item}) => (
          <ResearchCard
            type={item as ResearchId}
            onPress={(id) => {
              console.log(id);
            }}
          />
        )}
        keyExtractor={(id) => id}
      />
    </ThemedView>
  );
};

export default Research;
