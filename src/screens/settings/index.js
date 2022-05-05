import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Title, Container } from './styles';


export default function Settings({ navigation }) {
	const voltar = () => navigation.navigate('Home');

	return (
		<Container>
			<TouchableOpacity onPress={voltar}>
				<Title>Voltar</Title>
			</TouchableOpacity>
		</Container>
	);
}