import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Title, Container } from './styles';

export default function Configuracoes({ navigation }) {
	const vorta = () => navigation.toggleDrawer();
	
	return (
		<ThemeProvider theme={{background: '#000'}}>
			<Container>
				<TouchableOpacity onPress={vorta}>
					<Title>Vorta</Title>
				</TouchableOpacity>
			</Container>
		</ThemeProvider>
	);
}