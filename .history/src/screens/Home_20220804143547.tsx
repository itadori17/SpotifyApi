import { StyleSheet, View, SafeAreaView, ScrollView, Te } from 'react-native'
import React from 'react'
import { Box } from '../components'

const Home = () => {
  return (
   <SafeAreaView>
    <ScrollView>
        <Box>
            <Text>
            
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