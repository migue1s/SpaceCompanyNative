import React, {useCallback} from 'react';
import researchData, {ResearchId} from '../data/researchData';
import {useResearch, useResource} from '../hooks';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import ResourceBullet from './ResourceBullet';
import {ResourceType} from '../types';
import {resourcesData} from '../data/resourcesData';
import ThemedButton from './ThemedButton';

const ResearchCard = ({
  type,
  onPress,
}: {
  type: ResearchId;
  onPress: (id: ResearchId) => void;
}) => {
  const research = useResearch(type);
  const science = useResource(ResourceType.science);
  const onBuyPress = useCallback(() => {
    onPress(type);
  }, [onPress, type]);

  return (
    <ThemedView style={{paddingTop: 32, paddingHorizontal: 8}}>
      <ThemedText variant="title">{research.name}</ThemedText>
      <ThemedText variant="body" style={{paddingVertical: 8}}>
        {research.desc}
      </ThemedText>
      <ThemedText variant="body">Cost:</ThemedText>
      <ResourceBullet
        style={{paddingLeft: 8}}
        current={science.current}
        cost={research.science}
        dps={science.perSecond}
        storage={Number.POSITIVE_INFINITY}
        name={resourcesData.science.name}
      />
      <ThemedButton
        style={{marginTop: 8}}
        text={researchData[type].buttonText}
        onPress={onBuyPress}
      />
    </ThemedView>
  );
};

export default ResearchCard;
