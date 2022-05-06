import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card } from './components/';
import { styles } from './styles';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const Home = ({ navigation }) => {
	const [cards, setCards] = React.useState([]);
	
	return (
		<ScrollView style={styles.body}>
			<View style={styles.container}>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="Fillipe Boiola"
					message="Quando vc vai comer minha bundinha?"
					hour="10:00"
					onPress={() => navigation.navigate('Chats', { nick: 'Fillipe Boiola' })}
					view={1}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="Carlos Gay"
					message="Estou na parada gay!"
					hour="10:00"
					onPress={() => navigation.navigate('Chats', { nick: 'Carlos Gay' })}
					view={2}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="Mikael Propstituta Gratis"
					message="Estou livre hj, vai me comer?"
					hour="10:00"
					onPress={() => navigation.navigate('Chats', { nick: 'Mikael Propstituta Gratis' })}
					view={3}
				/>
				<Card
					avatar="https://whatsfacil.com/assets/img/default-avatar.png"
					nick="Eriton Gay Emcubado"
					message="Vai me comer no sigilo?"
					hour="10:00"
					onPress={() => navigation.navigate('Chats', { nick: 'Eriton Gay Emcubado' })}
					view={2}
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
		</Stack.Navigator>
	);
}
