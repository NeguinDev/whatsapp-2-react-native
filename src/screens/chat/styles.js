import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: '#101010',
	},
	container:{
		marginBottom: 50,
	},
	inputSend: {
		backgroundColor: '#343434',
		width: '100%',
		height: 50,
		bottom: 0,
		position: 'absolute',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: "space-between",
		padding: 10,
		zIndex: 1,
	},
	input: {
		flex: 1,
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius: 7,
		borderWidth: 1,
		color: '#fff',
		backgroundColor: '#464646',
		borderColor: '#464646',
	},
	buttonSend: {
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: "center",
	},
});