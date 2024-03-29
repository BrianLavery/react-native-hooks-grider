import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
	const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

	// Only want to call getBlogPosts one time
	useEffect(() => {
		getBlogPosts();

		// This tells RN that anytime we return to this screen we should call getBlogPosts again
		const listener = navigation.addListener('didFocus', () => {
			getBlogPosts();
		});

		// Return function that is invoked once index screen stops showing totally - we do clean up
		return () => {
			listener.remove();
		};
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={state}
				keyExtractor={(blogPost) => blogPost.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
							<View style={styles.row}>
								<Text style={styles.title}>
									{item.title} - {item.id}
								</Text>
								<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
									<FontAwesome name='trash-o' style={styles.icon} color='black' />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Create')}>
				<Feather name='plus' size={30} style={{ marginRight: 12 }} />
			</TouchableOpacity>
		),
	};
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 16,
		borderBottomWidth: 1,
		borderColor: 'gray',
		marginTop: 16,
	},
	title: {
		fontSize: 18,
	},
	icon: {
		fontSize: 32,
	},
});

export default IndexScreen;
