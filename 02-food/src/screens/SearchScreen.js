import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    return (
        <View style={styles.whiteBackground}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            { errorMessage ? <Text>{errorMessage}</Text> : null }
            <Text>We have found {results.length} results</Text>

            <ResultsList  title="Cost Effective" />
            <ResultsList  title="Bit Pricier" />
            <ResultsList  title="Big Spender" />
        </View>
    )
}

const styles = StyleSheet.create({
    whiteBackground: {
        backgroundColor: '#FFFFFF',
        ...StyleSheet.absoluteFillObject
    }
})

export default SearchScreen
