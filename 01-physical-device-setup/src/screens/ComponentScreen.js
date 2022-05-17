import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const name = 'Brian'
    
    return (
        <View>
            <Text style={styles.headerStyle}>Getting started with React Native!</Text>
            <Text style={styles.subheaderStyle}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 45,
        fontFamily: 'sans-serif'
    },
    subheaderStyle: {
        fontSize: 20,
        fontFamily: 'serif'
    }
})

export default ComponentsScreen