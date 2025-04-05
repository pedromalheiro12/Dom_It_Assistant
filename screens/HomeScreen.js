import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>It Assistant</Text>

      <Image
        source={require('../assets/avatar.png')} 
        style={styles.avatar}
        resizeMode="contain"
      />

      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="chat-bubble" size={36} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="mic" size={36} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomIcons}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Ionicons name="settings" size={24} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7EC8E3', // azul claro
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 30,
  },
  avatar: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 80,
  },
  iconButton: {
    padding: 10,
  },
  bottomIcons: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
