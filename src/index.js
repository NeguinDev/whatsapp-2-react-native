import * as React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

import { styles } from './styles';

import Conversations from "./screens/home/";
import Settings from './screens/settings/';
import Chat from './screens/chat/';

function Home({ navigation }) {
	return (
		<View style={styles.body}>
			<View style={styles.header}>
				<Text style={styles.title}>WhatsApp</Text>
				<Entypo name="dots-three-vertical" size={20} color="#fff" onPress={() => navigation.navigate('Settings')} />
			</View>
			<Tab.Navigator
				screenOptions={{
					tabBarActiveTintColor: '#fff',
					tabBarStyle: { backgroundColor: '#101010', color: '#fff' },
				}}
			>
				<Tab.Screen name="Conversas" component={Conversations} />
				<Tab.Screen name="Status" component={Conversations} />
				<Tab.Screen name="Chamadas" component={Conversations} />
			</Tab.Navigator>
		</View>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="auto" />

			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerShown: false
					}}
				/>
				
				<Stack.Screen
					name="Settings"
					component={Settings}
					options={{
						headerTintColor: '#fff',
						headerStyle: {
							backgroundColor: '#101010',
						}
					}}
				/>
				<Stack.Screen
					name="Chats"
					component={Chat}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}