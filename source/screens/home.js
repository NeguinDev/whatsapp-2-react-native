import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, FlatList } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { Card, Aviso } from '../components';

export const Home = ({ navigation }) => {
	const [tasks, setTasks] = React.useState([]);
	const [textTask, onChangeTextTask] = React.useState(null);

	const openMenu = () => navigation.toggleDrawer();
	const openNotifications = () => navigation.jumpTo('Configurações', { owner: 'Home' });

	const ReturnTasks = () => {
		return (
			<FlatList
				data={tasks}
				renderItem={
					({ item }) => (<Card text={item.text} hour={item.hour} />)
				}
			/>
		)
	}
	const AddTasks = () => {
		const date = new Date();
		const hour = `${date.getHours()}hr ${date.getMinutes()}m`;
		const join = tasks.concat({ text: textTask, hour: hour })
		setTasks(join);
		console.log(tasks)
	}

	return (
		<ScrollView style={styles.body}>
			<View style={styles.header}>
				<Entypo name="menu" size={24} color="#fff" onPress={openMenu} />
				<Text style={styles.title}>Agenda</Text>
				<Ionicons name="notifications" size={24} color="#fff" onPress={openNotifications} />
			</View>

			<Aviso texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />

			<View style={styles.boxInput}>
				<TextInput
					style={styles.input}
					placeholder="Digite sua tarefa..."
					onChangeText={onChangeTextTask}
					value={textTask}
				/>
				<View style={styles.icon}>
					<Ionicons name="add" size={45} color="#fff" onPress={AddTasks} />
				</View>
			</View>

			<View style={styles.container}>
				<Text style={styles.subtitle}>
					Remaining Tasks
					{" "}
					<Text style={{ fontWeight: "bold" }}>({tasks.length})</Text>
				</Text>
				<ReturnTasks />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: "#101010",//Black
	},
	header: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#fbfbfb"//White
	},
	container: {
		color: "#fbfbfb",//White
		margin: "auto",
		width: "100%",
	},
	subtitle: {
		fontSize: 20,
		fontWeight: "400",
		color: "#fbfbfb",//White
		margin: "auto",
		width: "100%",
		marginTop: 20,
		marginBottom: 20,
		marginLeft: 10,
	},
	boxInput: {
		flexDirection: "column",
		justifyContent: "space-between",
		margin: 15,
	},
	input: {
		flex: 1,
		borderWidth: "0.1px",
		borderColor: "rgba(255,255,255,1)",
		borderRadius: 5,
		padding: 8,
		fontSize: 17,
		color: "#fff",
		margin: 10,
	},
	inputHour: {
		borderWidth: "0.1px",
		borderColor: "rgba(255,255,255,1)",
		borderRadius: 5,
		padding: 8,
		fontSize: 17,
		color: "#fff",
	},
	icon: {
		backgroundColor: "#4282f0",
		borderRadius: 10,
		textAlign: "center",
	}
});