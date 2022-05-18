import React, { useState } from "react";
import { Text, StyleSheet, View } from 'react-native'

const BoxScreenExercise = () => {    
    return (
        <React.Fragment>
            <View style={styles.viewOneStyle}>
                <View style={styles.boxOneStyle} />
                <View style={styles.boxTwoStyle} />
                <View style={styles.boxThreeStyle} />
            </View>
            <View style={styles.viewTwoA}>
                <View style={styles.boxFourStyle} />
                <View style={styles.boxSixStyle} />
                </View>
            <View style={styles.viewTwoB}>
                <View style={styles.boxFiveStyle} />
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    viewOneStyle: {
        height: 160,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boxOneStyle: {
        height: 80,
        width: '30%',
        backgroundColor: 'darksalmon',
        borderWidth: 2,
        borderColor: 'red'
    },
    boxTwoStyle: {
        height: 80,
        width: '30%',
        backgroundColor: 'darkseagreen',
        borderWidth: 2,
        borderColor: 'green',
        alignSelf: 'flex-end'
        // Could use a few techniques here, e.g. marginTop, top, wrap it in another view
    },
    boxThreeStyle: {
        height: 80,
        width: '30%',
        backgroundColor: 'lavender',
        borderWidth: 2,
        borderColor: 'purple'
    },
    viewTwoA: {
        marginTop: 16,
        height: 80,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewTwoB: {
        height: 80,
        width: '100%',
        alignItems: 'center'
    },
    boxFourStyle: {
        height: 80,
        width: '30%',
        backgroundColor: 'darksalmon',
        borderWidth: 2,
        borderColor: 'red'
    },
    boxFiveStyle: {
        height: 80,
        width: '30%',
        backgroundColor: 'darkseagreen',
        borderWidth: 2,
        borderColor: 'green',
    },
    boxSixStyle: {
        height: 80,
        width: '30%',
        backgroundColor: 'lavender',
        borderWidth: 2,
        borderColor: 'purple'
    }
})

export default BoxScreenExercise  