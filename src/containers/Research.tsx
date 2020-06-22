import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {ResourceType} from '../types';
import ResourceRow from '../components/ResourceRow';
import {useNavigation} from '@react-navigation/native';
import {useResearches} from '../hooks';
import ResearchCard from '../components/ResearchCard';
import {ResearchId} from '../data/researchData';
import ThemedView from '../components/ThemedView';
import {useDispatch} from 'react-redux';
import {tryBuyResearch} from '../redux/researchSlice';

const Research = () => {
  const dispatch = useDispatch();
  const research = useResearches();
  const navigation = useNavigation();
  const onResourcePress = useCallback(
    (resource: ResourceType) => {
      navigation.navigate('ResourceDetail', {resource});
    },
    [navigation],
  );

  const onResearchPress = useCallback(
    (id: ResearchId) => {
      dispatch(tryBuyResearch(id));
    },
    [dispatch],
  );

  return (
    <ThemedView style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={
          <ResourceRow type={ResourceType.science} onPress={onResourcePress} />
        }
        data={research}
        renderItem={({item}) => (
          <ResearchCard type={item as ResearchId} onPress={onResearchPress} />
        )}
        keyExtractor={(id) => id}
      />
    </ThemedView>
  );
};

export default Research;
