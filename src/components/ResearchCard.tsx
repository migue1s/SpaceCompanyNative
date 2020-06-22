import React, {useCallback} from 'react';
import researchData, {ResearchId} from '../data/researchData';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import ResourceBullet from './ResourceBullet';
import {ResourceType} from '../types';
import ThemedButton from './ThemedButton';

const ResearchCard = ({
  type,
  onPress,
}: {
  type: ResearchId;
  onPress: (id: ResearchId) => void;
}) => {
  const meta = researchData[type];
  const onBuyPress = useCallback(() => {
    onPress(type);
  }, [onPress, type]);

  return (
    <ThemedView style={{paddingTop: 32, paddingHorizontal: 8}}>
      <ThemedText variant="title">{meta.name}</ThemedText>
      <ThemedText variant="body" style={{paddingVertical: 8}}>
        {meta.desc}
      </ThemedText>
      <ThemedText variant="body">Cost:</ThemedText>
      <ResourceBullet
        style={{paddingLeft: 8}}
        cost={meta.science}
        type={ResourceType.science}
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
