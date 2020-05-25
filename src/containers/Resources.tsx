import React from 'react';
import {Text, View, SectionList} from 'react-native';
import {useResources} from '../hooks';
import ResourceRow from '../components/ResourceRow';

const Resources = () => {
  const data = useResources();

  return (
    <SectionList
      style={{flex: 1}}
      sections={data}
      renderSectionHeader={({section}) => <Text>{section.header}</Text>}
      renderItem={({item}) => <ResourceRow type={item.id} />}
    />
  );
};

export default Resources;
