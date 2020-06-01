import React from 'react';
import {StyleSheet, View, ViewProps, ViewStyle, Text} from 'react-native';
import {useTheme} from '../hooks';
import {ThemeVariant} from '../types';

const styles = StyleSheet.create({
  progressBarContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    height: 20,
    width: '100%',
    borderWidth: 1,
  },
  progressBarFiller: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

const themeStylesContainer = StyleSheet.create<
  {[x in ThemeVariant]: ViewStyle}
>({
  dark: {
    backgroundColor: 'white',
    borderColor: 'black',
  },
  light: {
    backgroundColor: 'white',
    borderColor: 'black',
  },
});

const themeStylesFiller = StyleSheet.create<{[x in ThemeVariant]: ViewStyle}>({
  dark: {
    backgroundColor: 'skyblue',
  },
  light: {
    backgroundColor: 'skyblue',
  },
});

const ThemedProgressBar = ({
  style = {},
  current,
  total,
  ...rest
}: ViewProps & {current: number; total: number}) => {
  const theme = useTheme();
  const progress = (current: number, total: number): string => {
    let prog = (current / total) * 100;
    return prog.toString() + '%';
  };

  return (
    <View
      style={[style, styles.progressBarContainer, themeStylesContainer[theme]]}
      {...rest}>
      <View
        style={[
          StyleSheet.absoluteFill,
          style,
          styles.progressBarFiller,
          themeStylesFiller[theme],
          {width: progress(current, total)},
        ]}
      />
      <Text>{progress(current, total)}</Text>
    </View>
  );
};

export default ThemedProgressBar;
