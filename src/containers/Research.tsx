import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {ResourceType} from '../types';
import ResourceRow from '../components/ResourceRow';
import {useNavigation} from '@react-navigation/native';

const Resources = () => {
  const navigation = useNavigation();
  const onResourcePress = useCallback(
    (resource: ResourceType) => {
      navigation.navigate('ResourceDetail', {resource});
    },
    [navigation],
  );

  return (
    <FlatList
      ListHeaderComponent={
        <ResourceRow type={ResourceType.science} onPress={onResourcePress} />
      }
      data={[]}
      renderItem={({}) => <View />}
    />
  );
};

export default Resources;
