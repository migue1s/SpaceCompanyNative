import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  TextStyle,
  View,
} from 'react-native';
import ThemedText from './ThemedText';
import {ThemeVariant} from '../types';
import {useTheme} from '../hooks';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
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
  text,
  onPress,
  ...rest
}: TouchableOpacityProps & {
  text: string;
  onPress: () => void;
}) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[style, themeStyles[theme], styles.button]}
        onPress={onPress}
        {...rest}>
        <ThemedText variant="caption">{text}</ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default ThemedButton;
