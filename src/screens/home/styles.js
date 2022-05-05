import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const styles = StyleSheet.create({
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
		color: "#fbfbfb", //White
		flex: 1,
		flexBasis: "auto",
		flexShrink: 1,
		FlexGrow: 1,
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