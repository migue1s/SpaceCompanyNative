import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  TextStyle,
} from 'react-native';
import ThemedText from './ThemedText';
import {ThemeVariant} from '../types';
import {useTheme} from '../hooks';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    padding: 10,
  },
});

const themeStyles = StyleSheet.create<{[x in ThemeVariant]: TextStyle}>({
  dark: {
    borderColor: 'white',
    backgroundColor: 'black',
  },
  light: {
    borderColor: 'black',
    backgroundColor: 'white',
  },
});

const ThemedButton = ({
  style = {},
  children,
  onPress,
  ...rest
}: TouchableOpacityProps & {
  children: React.ReactNode | React.ReactNode[];
  onPress: () => void;
}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[style, styles.button, themeStyles[theme]]}
      onPress={onPress}
      {...rest}>
      <ThemedText variant="caption">{children}</ThemedText>
    </TouchableOpacity>
  );
};

export default ThemedButton;
