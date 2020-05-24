import React from 'react';
import {Text, View, SectionList} from 'react-native';
import {useResources} from '../hooks';

const Resources = () => {
  const data = useResources();

  return (
    <View>
      <SectionList
        sections={data}
        renderSectionHeader={({section}) => <Text>{section.header}</Text>}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default Resources;
