import React from 'react';
import {StyleSheet, Text, TextStyle, TextProps} from 'react-native';
import {TextVariant, ThemeVariant} from '../types';
import {useTheme} from '../hooks';

const styles = StyleSheet.create<{[x in TextVariant]: TextStyle}>({
  heading: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
  body: {
    fontSize: 18,
  },
  caption: {
    fontSize: 16,
  },
});

const themeStyles = StyleSheet.create<{[x in ThemeVariant]: TextStyle}>({
  dark: {
    color: 'white',
  },
  light: {
    color: 'black',
  },
});

const ThemedText = ({
  style = {},
  children,
  variant,
  ...rest
}: TextProps & {
  children: React.ReactNode | React.ReactNode[];
  variant: TextVariant;
}) => {
  const theme = useTheme();

  return (
    <Text style={[style, styles[variant], themeStyles[theme]]} {...rest}>
      {children}
    </Text>
  );
};

export default ThemedText;
