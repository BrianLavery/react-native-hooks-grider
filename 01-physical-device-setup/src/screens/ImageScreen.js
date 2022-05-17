import React from "react";
import { View, StyleSheet } from 'react-native'
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSource={require(`../../assets/forest.jpg`)} score={9.3} />
            <ImageDetail title="Beach" imageSource={require(`../../assets/beach.jpg`)} score={8.0}  />
            <ImageDetail title="Mountain" imageSource={require(`../../assets/mountain.jpg`)} score={7.4} />
        </View>
    )
}

const styles = StyleSheet.create({
})

export default ImageScreen