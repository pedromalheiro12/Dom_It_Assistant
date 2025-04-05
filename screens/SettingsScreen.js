import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Configurações</Text>

      {/* Nome + Avatar */}
      <View style={styles.profileSection}>
        <Ionicons name="person-circle-outline" size={64} color="white" />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Nome</Text>
          <Text style={styles.subtitle}>IT Assistant</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Opções */}
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Avatar</Text>
        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Perfil de voz</Text>
        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Conexão IoT</Text>
        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>

      {/* Botões Salvar / Restaurar */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.restoreButton}>
        <Text style={styles.saveText}>Restaurar</Text>
      </TouchableOpacity>

      {/* Histórico (canto inferior direito) */}
      <View style={styles.bottomIcons}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Ionicons name="clipboard-outline" size={24} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7EC8E3',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  nameContainer: {
    marginLeft: 10,
  },
  name: {
    color: 'white',
    fontSize: 20,
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    marginVertical: 15,
  },
  optionButton: {
    backgroundColor: '#ADD8E6',
    width: '100%',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: 'white',
  },
  saveButton: {
    backgroundColor: '#B0D9E8',
    padding: 15,
    marginTop: 20,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
  },
  restoreButton: {
    backgroundColor: '#B0D9E8',
    padding: 15,
    marginTop: 10,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
  },
  saveText: {
    fontSize: 18,
    color: 'white',
  },
  bottomIcons: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
