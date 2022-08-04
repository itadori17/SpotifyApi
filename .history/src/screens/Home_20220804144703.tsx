import { StyleSheet, View, SafeAreaView, ScrollView, Text} from 'react-native'
import React from 'react'
import { Box } from '../components'

const Header = ({title}: {title: string}) => {
    return (
        <Box>
            <Text>{title}</Text>
        </Box>
    )

}

const Home = () => {
  return (
   <SafeAreaView>
    <ScrollView>
        <Box flex={ 1}>
            <Box marginHorizontal='m'>
            
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