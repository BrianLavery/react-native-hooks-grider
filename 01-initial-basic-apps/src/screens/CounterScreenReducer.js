import React, { useReducer } from "react";
import { Text, StyleSheet, Button, View } from 'react-native'

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 }
        case 'decrement':
            return { ...state, count: Math.max(state.count - 1, 0) }
        default:
            return state
    }
}

const CounterScreenReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    
    return (
        <View>
            <Button title='Increment' onPress={() => dispatch({ type: 'increment'}) } />
            <Button title='Decrement' onPress={() => dispatch({ type: 'decrement'}) } />
            <Text>Current Count: {state.count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default CounterScreenReducer  