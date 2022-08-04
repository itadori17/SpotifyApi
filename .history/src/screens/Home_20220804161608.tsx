import { StyleSheet, View, SafeAreaView, ScrollView, Text} from 'react-native'
import React from 'react'
import { Box, theme } from '../components'
import { Ionicons  } from '@expo/vector-icons'
import albumCategory from '../data/albumCategory'


const Header = ({title, iconName}: {title: string, iconName?: string }) => {
    return (
        <Box  
        flexDirection='row' 
        alignItems='center' 
        justifyContent='space-between'
        height={60}
        >
        
            <Text style={styles.title1} >{ title}</Text>
            { iconName ? 
            <Ionicons name="md-settings-outline" size={24} color={theme.colors.text} /> 
            : null
        }
            
        </Box>
    )

}

const Home = () => {
  return (
   <SafeAreaView style={{backgroundColor: theme.colors.primary, flex: 1}}>
    <ScrollView  >
            <Box marginHorizontal='l' marginVertical='l' >
            <Header title='Listener' iconName='settings' />
            </Box>
            <Box>
                <ScrollView>
                    {albumCategory.map((item, i) => {
                        return (
                            <Box key={i}>
                                <Text style={styles.title2} >
                                    {item.title}
                                </Text>
                                <Box>
                                    <ScrollView>
                                    {item.albums.map((aItem, i) => {
                                        return (
                                            <Box>
                                                <
                                            </Box>
                                        )
                                    })}
                                    </ScrollView>
                                </Box>
                            </Box>
                        )
                    })}
                </ScrollView>
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
    },
    title2: {
        fontSize: 24,
        lineheight: 30,

        color: '#fff',
    }, 
    thumbImage: {
        height: 40,
        width: 40,
    }
});

export default Home