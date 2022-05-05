import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	card: {
		flex: 1,
		flexDirection: "row",
		color: "#fbfbfb",//White
		alignContent: "space-between",
		padding: 13,
		borderRadius: 10,
		backgroundColor: "rgba(25,25,25,255)",//Black Light
		margin: 3,
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: "50%",
	},
	cardInfo: {
		flex: 1,
		flexBasis: "auto",
		flexShrink: 1,
		flexGrow: 1,
		marginRight: 10,
	},
	nick: {
		color: "#fbfbfb",//White
		fontWeight: "700",
		fontSize: 17,
		textAlign: "left",
		marginLeft: 10,
		marginRight: 10,
		flexBasis: "auto",
		flexShrink: 1,
		flexGrow: 1,
	},
	messages: {
		flex: 1,
		flexDirection: "row",
		flexBasis: "auto",
		flexShrink: 1,
		flexGrow: 1,
		marginLeft: 7,
	},
	message: {
		color: "#fbfbfb",//White
		textAlign: "left",
		marginLeft: 2,
	},
	textHour: {
		fontSize: 12,
		flexBasis: "auto",
		flexShrink: 0,
		flexGrow: 0,
		color: "#fbfbfb",//White
	},
});