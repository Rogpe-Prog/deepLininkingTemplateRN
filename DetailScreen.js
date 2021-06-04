import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const DetailScreen = ({ route, navigation }) => {

    const { itemId } = route.params

    return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.title}>itemId: {itemId}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.title}>Go to HomeScreen...</Text>
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

export default DetailScreen
