import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    // To add a key we can make a key property in the file (as a string) and RN does rest
    // e.g. { name: 'friend 1', key: '1' },
    const friends = [
        { name: 'Friend 1', age: 20 },
        { name: 'Friend 2', age: 25 },
        { name: 'Friend 3', age: 32 },
        { name: 'Friend 4', age: 41 },
        { name: 'Friend 5', age: 43 },
        { name: 'Friend 6', age: 26 },
        { name: 'Friend 7', age: 34 },
        { name: 'Friend 8', age: 35 },
        { name: 'Friend 9', age: 39 }
    ]
    
    // element below is not exactly the JS object - can pull that off by destructuring item
    // We can also do keys at runtime using keyExtractor
    // horizontal will change axis of screen
    // showsHorizontalScrollIndicator hides the scrollbar
    return (
        <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}    
        data={friends} 
            renderItem={({ item }) => <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text> } 
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen