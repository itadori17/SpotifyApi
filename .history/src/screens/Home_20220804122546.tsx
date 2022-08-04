import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Premium</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent
    }
})

export default Home