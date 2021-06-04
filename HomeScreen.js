import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native'

const HomeScreen = ({ navigation }) => {

    const deeplink = () => {
        Linking.openURL('navigs://DetailScreen')
    }

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', {
            itemId: 12
        })}>
            <Text style={styles.title}>Go to DetailScreen...</Text>
        </TouchableOpacity>
        <Text style={styles.title}>..............................</Text>
        <TouchableOpacity onPress={deeplink}>
            <Text style={styles.title}>Deep Linking</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    title: {
        color: '#FFF',
        fontSize: 28,
    },
})

export default HomeScreen
