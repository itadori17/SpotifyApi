import { createBox,
            createText,
            useTheme as useReTheme
        } from '@shopify/restyle';

import { TextStyle, View, ViewStyle } from 'react-native';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle};

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
        xl: 40,
    },
    borderRadii: {
        s: 4,
        m: 10,
        l: 25,
        xl: 75,
    },
    textVariants: {
        hero: {
            fontSize: 80,
            lineHeight: 80,

            color: 'text',
            textAlign: 'center',
        },
        title1: {
            fontSixe: 28,

            color: 'text',
        },
        title2: {
            fontSize: 24,
            lineheight: 30,

            color: 'text',
        },
        body: {
            fontSize: 16,
            lineHeight: 24,

            color: 'text',
        },
        button: {
            fontSize: 15,
            color: 'text',
        },
        header: {
            fontSize: 12,

            lineHeight: 24,
            color: 'text',
        },
    },
    breakpoints: {},
};

export type Theme = typeof theme;

export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const useTheme = () => useReTheme<Theme>();

export const makeStyles = <T extends NamedStyles<T>>(
    styles: (theme: Theme) => T 
    ) => () => {
        const currentTheme = useTheme();
        return styles(currentTheme)
    }

