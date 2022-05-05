import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card } from './components/';
import { styles } from './styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Chat from '../chat';

const Home = ({ navigation }) => {
	const [cards, setCards] = React.useState([]);
	
	return (
		<ScrollView style={styles.body}>
			<View style={styles.container}>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="João"
					message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					hour="10:00"
					onPress={() => navigation.navigate('Chats')}
					view={3}
				/>
			</View>
		</ScrollView>
	);
}

export default function Conversations({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Chats"
				component={Chat}
				options={{
					headerShown: false,
					headerTintColor: '#fff',
					headerStyle: {
						backgroundColor: '#101010',
					}
				}} />
		</Stack.Navigator>
	);
}
