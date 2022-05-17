import React, { useState } from "react";
import { Text, StyleSheet, Button, View } from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
    
    return (
        <View>
            <Button title='Increase' onPress={() => setCounter(Math.max(counter + 1, 0))} />
            <Button title='Decrease' onPress={() => setCounter(Math.max(counter - 1, 0))} />
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default CounterScreen  