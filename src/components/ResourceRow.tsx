import React from 'react';
import {Text, View} from 'react-native';
import {ResourceType} from '../types';
import {useResourceCount, useResource} from '../hooks';

const ResourceRow = ({type}: {type: ResourceType}) => {
  const data = useResource(type);
  const count = useResourceCount(type);

  return (
    <View style={{flexDirection: 'row', padding: 8}}>
      <Text style={{flex: 1}}>Icon</Text>
      <Text style={{flex: 2, textAlign: 'left'}}>{data.name} </Text>
      <Text style={{flex: 2, textAlign: 'center'}}>{count.perSecond}/Sec</Text>
      <Text style={{flex: 2, textAlign: 'right'}}>
        {count.current}/{count.capacity}
      </Text>
    </View>
  );
};

export default ResourceRow;
