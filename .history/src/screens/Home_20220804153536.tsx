import { StyleSheet, View, SafeAreaView, ScrollView, Text} from 'react-native'
import React from 'react'
import { Box, theme } from '../components'
import { Ionicons  } from '@expo/vector-icons'

const Header = ({title}: {title: string}) => {
    return (
        <Box  
        flexDirection='row' 
        alignItems='center' 
        justifyContent='space-between'
        
        height={60}
        >
        
            <Text style={styles.title1} >{ title}</Text>
            <Ionicons name="md-settings-outline" size={24} color={theme.colors.text} />
        </Box>
    )

}

const Home = () => {
  return (
   <SafeAreaView style={{backgroundColor: theme.colors.primary, flex: 1}}>
    <ScrollView  >
            <Box marginVertical='l' >
            <Header title='Listener' />
            </Box>
    </ScrollView>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:  theme.colors.primary,
         flex: 1
    },
    title1: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },background : {
        color: 'rgb(255, 69, 58)'
    }
});

export default Home