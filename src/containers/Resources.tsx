import React, {useCallback} from 'react';
import {SectionList, StyleSheet, ViewStyle} from 'react-native';
import {useResources} from '../hooks';
import ResourceRow from '../components/ResourceRow';
import ListHeading from '../components/ListHeading';
import {ResourceType} from '../types';
import {useNavigation} from '@react-navigation/native';

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
    <SectionList
      style={styles.list}
      sections={data}
      renderSectionHeader={({section}) => (
        <ListHeading>{section.header}</ListHeading>
      )}
      renderItem={({item}) => (
        <ResourceRow type={item.id} onPress={onResourcePress} />
      )}
    />
  );
};

export default Resources;
