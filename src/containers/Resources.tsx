import React from 'react';
import {SectionList} from 'react-native';
import {useResources} from '../hooks';
import ResourceRow from '../components/ResourceRow';
import ListHeading from '../components/ListHeading';

const Resources = () => {
  const data = useResources();

  return (
    <SectionList
      style={{flex: 1}}
      sections={data}
      renderSectionHeader={({section}) => (
        <ListHeading>{section.header}</ListHeading>
      )}
      renderItem={({item}) => <ResourceRow type={item.id} />}
    />
  );
};

export default Resources;
