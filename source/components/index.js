import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const Aviso = ({ texto }) => {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<AntDesign name="checkcircle" size={24} color="green" />
				<Text style={styles.paragraf}>{texto}
				</Text>
				<View style={styles.hour}>
					<Text style={styles.textHour}>1hr 25m</Text>
				</View>
			</View>
		</View>
	);
}

export const Card = ({ text, hour }) => {
	return (
		<View style={[styles.card, styles.card2]}>
			<AntDesign style={styles.icon} name="checkcircle" size={24} color="gray" />
			<Text style={styles.paragraf}>{text}</Text>
			<View style={styles.hour}>
				<Text style={styles.textHour}>{hour}</Text>
			</View>
		</View>
	);
}


const styles = StyleSheet.create({
	card: {
		flex: 1,
		flexDirection: "row",
		color: "#fbfbfb",//White
		alignContent: "space-between",
		backgroundColor: "#223a28",//Green
		padding: 20,
		margin: "auto",
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 10,
	},
	icon: {
		flexBasis: "auto",
		flexShrink: 0,
		flexGrow: 0,
	},
	paragraf: {
		color: "#fbfbfb",//White
		fontWeight: "500",
		textAlign: "left",
		marginLeft: 10,
		marginRight: 10,
		flexBasis: "1",
		flexShrink: 1,
		flexGrow: 1,
	},
	textHour: {
		fontSize: 12,
		flexBasis: "auto",
		flexShrink: 0,
		flexGrow: 0,
		color: "#fbfbfb",//White
	},
	card2: {
		backgroundColor: "rgba(25,25,25,255)",//Black Light
		margin: 8,
	},
});