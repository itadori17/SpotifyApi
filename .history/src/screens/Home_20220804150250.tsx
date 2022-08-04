import { StyleSheet, View, SafeAreaView, ScrollView, Text} from 'react-native'
import React from 'react'
import { Box, theme } from '../components'

const Header = ({title}: {title: string}) => {
    return (
        <Box>
            <Text variant ='title1' styles={styles.labe} >{ title}</Text>
        </Box>
    )

}

const Home = () => {
  return (
   <SafeAreaView style={{backgroundColor: theme.colors.primary, flex: 1}}>
    <ScrollView  >
        <Box backgroundColor='primary' flex={ 1}>
            <Box marginHorizontal='l' marginVertical='l' >
            <Header title='Listener' />
            </Box>
            
        </Box>
    </ScrollView>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:  theme.colors.primary, flex: 1
    },
    label: {
       
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
    }
});

export default Home