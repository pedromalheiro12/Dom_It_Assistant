import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>It Assistant</Text>

      <Image source={require('../assets/avatar.png')} style={styles.avatar} />

      <View style={styles.iconRow}>
        <TouchableOpacity>
          <Ionicons name="chatbubble-ellipses-outline" size={40} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="mic-outline" size={40} color="#fff" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => navigation.navigate('Settings')}
      >
        <Ionicons name="settings-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#78C8E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    top: 50,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  avatar: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 40,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 20,
  },
  settingsButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
});
