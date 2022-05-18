import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from 'react-native'

const TextScreen = () => {       
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    
    // Text Input has zero styling applied to it
    // We often add in properties to prevent iOS capitalising and autocorrecting
    return (
        <View style={styles.view}>
            <Text>Enter name:</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue) }
            />
            <Text>My name is {name}</Text>

            <Text>Enter password:</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue) }
            />
            { (password.length > 0 && password.length <6) ? <Text>Password must be longer than 5 characters</Text> : null }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 12,
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 4,
        paddingVertical: 4
    }, 
    view: {
        height: '100%', 
        backgroundColor: 'aliceblue'
    }
})

export default TextScreen  