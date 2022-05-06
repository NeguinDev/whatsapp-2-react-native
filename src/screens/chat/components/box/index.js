import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

function BoxSend({ text, hour }) {
	return (
		<View style={styles.boxSend}>
			<View style={styles.messagesSend}>
				<Text style={styles.text}>
					{text}
				</Text>
				<Text style={[styles.hour, styles.hourSend]}>
					{hour}
				</Text>
			</View>
		</View>
	);
}
function BoxReceive({ text, hour, view }) {
	return (
		<View style={styles.boxReceive}>
			<View style={styles.messagesReceive}>
				<Text style={styles.text}>
					{text}
				</Text>
				<Text style={[styles.hour, styles.hourReceive]}>
					{hour}
				</Text>
				{
					view == 1 ?
						<Ionicons name="checkmark" size={20} color="#c0c0c0" /> :
						view == 2 ?
							<Ionicons name="checkmark-done" size={20} color="#c0c0c0" /> :
							view == 3 ?
								<Ionicons name="checkmark-done" size={20} color="#2596be" />
								: null
				}
			</View>
		</View>
	);
}
export function Box({ text, hour, isSend }) {
	if (isSend) {
		return (
			<BoxSend text={text} hour={hour} />
		);
	} else {
		return (
			<BoxReceive text={text} hour={hour} />
		);
	}
}