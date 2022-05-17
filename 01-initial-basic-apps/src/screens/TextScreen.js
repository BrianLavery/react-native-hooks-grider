import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from 'react-native'

const TextScreen = () => {       
    // Text Input has zero styling applied to it
    // We often add in properties to prevent iOS capitalising and autocorrecting
    return (
        <View>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
            />
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
    }
})

export default TextScreen  