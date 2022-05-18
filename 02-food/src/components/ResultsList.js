import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results, navigation }) => {
    if (results.length === 0) {
        return null
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={results}
                    keyExtractor={result => result.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity 
                                onPress={() => navigation.navigate('ResultsShow', { id: item.id })}
                            >
                                <ResultsDetail result={item} />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 12
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 8
    }
})

// We write line below to get navigation
export default withNavigation(ResultsList)