import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import { Home } from './source/screens/home';
import Configuracoes from './source/screens/config';

function Menu() {
	return (
		<Drawer.Navigator
			useLegacyImplementation
			screenOptions={{
				drawerType: "front",
				headerShown: false,
				drawerActiveTintColor: "#fff",
				drawerInactiveTintColor: "#fff",
				drawerStyle: {
					backgroundColor: '#141414',
				},
			}}>
			<Drawer.Screen name="Agenda" component={Home} />
			<Drawer.Screen name="Configurações" component={Configuracoes} />
		</Drawer.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="auto" />
			<Menu />
		</NavigationContainer>
	);
}