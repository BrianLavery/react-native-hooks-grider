import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children }) => {
	return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
	spacer: {
		margin: 15,
		padding: 0,
	},
});

export default Spacer;
