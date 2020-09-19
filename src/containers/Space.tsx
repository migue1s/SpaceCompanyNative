import React from 'react';
import {FlatList, View} from 'react-native';
import ResourceMachine from '../components/ResourceMachine';
import ResourceRow from '../components/ResourceRow';
import ThemedView from '../components/ThemedView';
import {useResourceHandler} from '../hooks';
import {ResourceType} from '../types';

const Space = () => {
  const onResourcePress = useResourceHandler();

  return (
    <ThemedView style={{padding: 8, flex: 1}}>
      <FlatList
        ListHeaderComponent={
          <View>
            <ResourceRow
              type={ResourceType.rocketFuel}
              onPress={onResourcePress}
            />
          </View>
        }
        data={[]}
        renderItem={({item}) => (
          <ResourceMachine style={{paddingTop: 32}} type={item} />
        )}
        keyExtractor={(item) => item}
      />
    </ThemedView>
  );
};

export default Space;
