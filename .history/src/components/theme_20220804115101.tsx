import { TextStyle, View, ViewStyle } from 'react-native';

type NamedStyle<T> = { [P in keyof T]: ViewStyle | TextStyle};

export const theme = {
    colors: {
        primary: 'rgb(28, 28, 30)',
        background: 'rgb(28, 28, 30)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(255, 255, 255)',
        border: 'rgb(199, 199, 204)',
        Notification: 'rgb(255, 69, 58)',
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl
    }
}

