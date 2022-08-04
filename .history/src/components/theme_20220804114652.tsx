import { TextStyle, View, ViewStyle } from 'react-native';

type NamedStyle<T> = { [P in keyof T]: ViewStyle | TextStyle};

exp

