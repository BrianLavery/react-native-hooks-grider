import React, { useState } from "react";
import { Text, StyleSheet, View } from 'react-native'
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const BoxScreen = () => {    
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
            <Text style={styles.fillParent}>Shortcut to fill parent</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 300,
        // alignItems: 'flex-start' // 'center' / 'flex-end' / 'stretch' - DEFAULT
        // flexDirection: 'row' // 'column' - DEFAULT
        // justifyContent: 'space-around' // 'center' / 'space-between' / 'flex-start' - DEFAULT
    },
    textOneStyle: {
        borderWidth: 2,
        borderColor: 'red',
        marginVertical: 4,
        marginHorizontal: 4,
        padding: 4,
        flex: 4
    },
    textTwoStyle: {
        borderWidth: 2,
        borderColor: 'red',
        marginVertical: 4,
        marginHorizontal: 4,
        padding: 4,
        // flex: 4,
        alignSelf: 'center', // Can set its own alignment different to the others
        position: 'absolute', // Ignores siblings but obeys some flexbox properties
        top: 10, // Adds in some adjustment only to this child - relates to how close to parent edge
        left: 10
    },
    textThreeStyle: {
        borderWidth: 2,
        borderColor: 'red',
        marginVertical: 4,
        marginHorizontal: 4,
        padding: 4,
        flex: 2
    },
    fillParent: {
        backgroundColor: 'cyan',
        borderWidth: 2,
        borderColor: 'blue',
        // We have a shortcut to write these fillContainer options
        // position: "absolute",
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
        // Shortcut
        ...StyleSheet.absoluteFillObject
    }
})

export default BoxScreen  