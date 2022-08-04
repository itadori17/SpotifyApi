import { StyleSheet, View, SafeAreaView, ScrollView, Text} from 'react-native'
import React from 'react'
import { Box, theme } from '../components'

const Header = ({title}: {title: string}) => {
    return (
        <Box>
            <Text variant ='title1' >{ title}</Text>
        </Box>
    )

}

const Home = () => {
  return (
   <SafeAreaView>
    <ScrollView style={{backgroundColor: theme.colors.primary, flex}} >
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
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home