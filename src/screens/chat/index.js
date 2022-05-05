import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';

export default function Chat({ navigation, route }) {
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
    return (
        <ScrollView style={styles.body}>
            <View style={styles.container}>
                <Text style={styles.title}>Chat</Text>
            </View>
        </ScrollView>
    );
}