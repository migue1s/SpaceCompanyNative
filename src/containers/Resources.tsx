import React from 'react';
import {SectionList, StyleSheet, ViewStyle} from 'react-native';
import {useResources} from '../hooks';
import ResourceRow from '../components/ResourceRow';
import ListHeading from '../components/ListHeading';

const styles = StyleSheet.create<{
  list: ViewStyle;
}>({
  list: {
    flex: 1,
  },
});

const Resources = () => {
  const data = useResources();

  return (
    <SectionList
      style={styles.list}
      sections={data}
      renderSectionHeader={({section}) => (
        <ListHeading>{section.header}</ListHeading>
      )}
      renderItem={({item}) => <ResourceRow type={item.id} />}
    />
  );
};

export default Resources;
