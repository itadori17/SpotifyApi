import { StyleSheet, View, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'
import { Box, Text } from '../components'

const Home = () => {
  return (
   <SafeAreaView>
    <ScrollView>
        <Box>
            <Text>
            Home
            </Text>
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