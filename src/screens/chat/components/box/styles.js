import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	boxSend: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		margin: 10,
		backgroundColor: '#232323',
		borderRadius: 10,
		padding: 10,
		marginStart: 100,
	},
	messagesSend: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
	},
	boxReceive: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		margin: 10,
		backgroundColor: '#232323',
		borderRadius: 10,
		padding: 10,
		marginEnd: 100,
	},
	messagesReceive: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	text: {
		fontSize: 15,
		color: '#fff',
	},
	hour: {
		fontSize: 8,
		color: '#fff',
		flex: 1,
		textAlign: 'right',
	},
});