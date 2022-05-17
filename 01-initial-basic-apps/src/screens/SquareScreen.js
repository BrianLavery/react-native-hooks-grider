import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from 'react-native'
import ColourCounter from "../components/ColourCounter";

// Helper function so we have same logic if red/ green /blue
const colourRangeValidator = (state, colour, amount) => {
    const newState = { ...state }
    newState[colour] = (state[colour] + amount > 255) ? 255 : Math.max(state[colour] + amount, 0)
    return newState
}

// By convention we define reducer outside the Component - otherwise get variable name confusion (state)
const reducer = (state, action) => {
    const { type, payload, intervalValue } = action
    
    if (type === 'set interval') {
        return { ...state, interval: payload }
    } else {
        return colourRangeValidator(state, type, payload)
    }
}

const SquareScreen = () => {    
    
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0, interval: 1 })
    const { red, green, blue, interval } = state;

    return (
        <View>
            <ColourCounter 
                onIncrease={() => dispatch({ type: 'red', payload: 1 * interval }) }
                onDecrease={() => dispatch({ type: 'red', payload: -1 * interval }) }
                colour="Red" 
            />
            <ColourCounter 
                onIncrease={() => dispatch({ type: 'green', payload: 1 * interval }) }
                onDecrease={() => dispatch({ type: 'green', payload: -1 * interval }) }
                colour="Green" 
            />
            <ColourCounter 
                onIncrease={() => dispatch({ type: 'blue', payload: 1 * interval }) }
                onDecrease={() => dispatch({ type: 'blue', payload: -1 * interval }) }
                colour="Blue" 
            />
            
            <View style={{ height: 150, width: 150, margin: 20, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
            
            <View style={{ margin: 5 }}>
                <Text>Red: {red}</Text>
                <Text>Green: {green}</Text>
                <Text>Blue: {blue}</Text>
            </View>

            <Text>Adjust interval</Text>
            <Button title='1' onPress={() => dispatch({ type: 'set interval', payload: 1 })} />
            <Button title='5' onPress={() => dispatch({ type: 'set interval', payload: 5 })} />
            <Button title='10' onPress={() => dispatch({ type: 'set interval', payload: 10 })} />
            <Button title='20' onPress={() => dispatch({ type: 'set interval', payload: 20 })} />
        </View>
    )
}

const styles = StyleSheet.create({
})

export default SquareScreen  