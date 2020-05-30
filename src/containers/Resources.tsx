import React, {useCallback} from 'react';
import {SectionList, StyleSheet, ViewStyle} from 'react-native';
import {useResources} from '../hooks';
import ResourceRow from '../components/ResourceRow';
import ListHeading from '../components/ListHeading';
import {ResourceType, ResourceCategoryType} from '../types';
import {useNavigation} from '@react-navigation/native';
import {categoriesData} from '../data/resourcesData';
import ThemedView from '../components/ThemedView';

const styles = StyleSheet.create<{
  list: ViewStyle;
}>({
  list: {
    flex: 1,
  },
});

const Resources = () => {
  const data = useResources();
  const navigation = useNavigation();
  const onResourcePress = useCallback(
    (resource: ResourceType) => {
      navigation.navigate('ResourceDetail', {resource});
    },
    [navigation],
  );

  return (
    <ThemedView style={{flex: 1}}>
      <SectionList
        style={styles.list}
        sections={data}
        renderSectionHeader={({section}) => (
          <ListHeading>
            {categoriesData[section.header as ResourceCategoryType].title}
          </ListHeading>
        )}
        renderItem={({item}) => (
          <ResourceRow type={item.id} onPress={onResourcePress} />
        )}
      />
    </ThemedView>
  );
};

export default Resources;
