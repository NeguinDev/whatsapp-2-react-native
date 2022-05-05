import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
	body: {
		flex: 1,
		backgroundColor: "#101010",//Black
	},
})