import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';

export default function Chat({ navigation }) {
    return (
        <ScrollView style={styles.body}>
            <View style={styles.container}>
                <Text style={styles.title}>Chat</Text>
            </View>
        </ScrollView>
    );
}