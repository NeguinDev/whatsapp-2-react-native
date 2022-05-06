import React from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Box } from './components/';
import { Ionicons } from '@expo/vector-icons';
import { useRef } from 'react';

export default function Chat({ navigation, route }) {
	const [messages, setMessages] = React.useState([]);
	const [text, setText] = React.useState('');
	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: true,
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: "#101010",
			},
			headerTitle: (route?.params?.nick ?? 'Chat'),
		});
		// navigation.reset({
		//     index: 0,
		//     routes: [
		//         {name: 'Chat'},
		//     ],
		// })
	}, [navigation]);

	const scrollRef = useRef();
	const sendMessage = () => {
		if (text.length > 0) {
			setMessages([...messages, { text, hour: '11:02', isSend: true }]);
			setText('');
		}
	}
	return (
		<SafeAreaView style={styles.body}>
			<ScrollView style={styles.container} ref={scrollRef} onContentSizeChange={() => scrollRef.current.scrollToEnd({animated: true})}>
				{messages.map((message, index) => (
					<Box text={message.text} hour={message.hour} isSend={message.isSend} />
				))}
			</ScrollView>
			<View style={styles.inputSend}>
				<TextInput
					style={styles.input}
					placeholder=" Digite sua mensagem..."
					placeholderTextColor="#fff"
					onChangeText={(text) => setText(text)}
					value={text}
				/>
				<TouchableOpacity
					style={styles.buttonSend}
					onPress={sendMessage}
				>
					<Ionicons name="send" size={24} color="#fff" />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}