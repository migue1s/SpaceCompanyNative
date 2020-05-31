import React from 'react';
import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import {useTheme} from '../hooks';
import {ThemeVariant} from '../types';

const styles = StyleSheet.create<{[x in ThemeVariant]: ViewStyle}>({
  dark: {
    backgroundColor: 'black',
  },
  light: {
    backgroundColor: 'white',
  },
});

const ThemedView = ({
  style = {},
  children,
  ...rest
}: ViewProps & {children: React.ReactNode | React.ReactNode[]}) => {
  const theme = useTheme();
  return (
    <View style={[style, styles[theme]]} {...rest}>
      {children}
    </View>
  );
};

export default ThemedView;
