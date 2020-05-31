import React, {useCallback} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {ResourceType} from '../types';
import {useResource} from '../hooks';
import ThemedText from './ThemedText';
import ThemedView from './ThemedView';
import {resourceIcons} from '../assets';
import {resourcesData} from '../data/resourcesData';

const ResourceRow = ({
  type,
  onPress,
}: {
  type: ResourceType;
  onPress: (type: ResourceType) => void;
}) => {
  const meta = resourcesData[type];
  const data = useResource(type);
  const onButtonPress = useCallback(() => {
    onPress(type);
  }, [onPress, type]);

  return (
    <TouchableOpacity onPress={onButtonPress}>
      <ThemedView
        style={{flexDirection: 'row', padding: 8, alignItems: 'center'}}>
        <Image source={resourceIcons[type]} style={{height: 32, width: 32}} />
        <ThemedText
          variant="body"
          style={{flex: 2, textAlign: 'left', paddingLeft: 8}}>
          {meta.name}
        </ThemedText>
        <ThemedText variant="body" style={{flex: 2, textAlign: 'center'}}>
          {data.perSecond}/Sec
        </ThemedText>
        <ThemedText variant="body" style={{flex: 2, textAlign: 'right'}}>
          {data.current}/{data.capacity}
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
};

export default ResourceRow;
