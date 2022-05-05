import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function Card({ avatar, nick, message, hour, onPress, view }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.card}>
				<Image style={styles.avatar} source={{ uri: avatar }} />
				<View style={styles.cardInfo}>
					<Text style={styles.nick}>{nick}</Text>
					<View style={styles.messages}>
						{
							view == 1 ?
							<Ionicons name="checkmark" size={20} color="#c0c0c0" /> :
							view == 2 ?
							<Ionicons name="checkmark-done" size={20} color="#c0c0c0" /> :
							view == 3 ?
							<Ionicons name="checkmark-done" size={20} color="#2596be" />
							: null
						}
						<Text style={styles.message}>{message.length > 33 ? message.substring(0, 33).trim()+"..." : message}</Text>
					</View>
				</View>
				<View style={styles.hour}>
					<Text style={styles.textHour}>{hour}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
