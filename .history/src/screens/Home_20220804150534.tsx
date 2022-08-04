import { StyleSheet, View, SafeAreaView, ScrollView, Text} from 'react-native'
import React from 'react'
import { Box, theme } from '../components'

const Header = ({title}: {title: string}) => {
    return (
        <Box>
            <Text style={styles.title1} >{ title}</Text>
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
    title1: {
        fontSize: 80,
        lineHeight: 80,

        color: '#fff',
        textAlign: 'center',
    },
});

export default Home