import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => result.price === price)
    }

    return (
        <View style={styles.whiteBackground}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            { errorMessage ? <Text>{errorMessage}</Text> : null }

            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective" 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier" 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title="Expensive" 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$$')} 
                    title="Uber expensive" 
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    whiteBackground: {
        backgroundColor: '#FFFFFF',
        ...StyleSheet.absoluteFillObject,
        // flex: 1 // This tells view to only use visible estate in the screen, don't go beyond
        // Another option is to use a React.Fragment
    }
})

export default SearchScreen
