import React from 'react';
import {ResourceType} from '../types';
import {useResourceCount, useResource} from '../hooks';
import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

const ResourceRow = ({type}: {type: ResourceType}) => {
  const data = useResource(type);
  const count = useResourceCount(type);

  return (
    <ThemedView style={{flexDirection: 'row', padding: 8}}>
      <ThemedText variant="body" style={{flex: 1}}>
        Icon
      </ThemedText>
      <ThemedText variant="body" style={{flex: 2, textAlign: 'left'}}>
        {data.name}{' '}
      </ThemedText>
      <ThemedText variant="body" style={{flex: 2, textAlign: 'center'}}>
        {count.perSecond}/Sec
      </ThemedText>
      <ThemedText variant="body" style={{flex: 2, textAlign: 'right'}}>
        {count.current}/{count.capacity}
      </ThemedText>
    </ThemedView>
  );
};

export default ResourceRow;
