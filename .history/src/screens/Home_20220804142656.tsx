import { StyleSheet, View, SafeAreaView, ScrollView, Text } from 'react-native'
import React from 'react'
import { Box, Text } from '../components'

const Home = () => {
  return (
   <SafeAreaView>
    <ScrollView>
        <Box>
            <Text/>
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