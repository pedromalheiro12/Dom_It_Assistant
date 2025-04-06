import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SettingsScreen({ navigation }) {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Configurações</Text>

        {/* Avatar + Nome + Subtítulo */}
        <View style={styles.profileSection}>
          <Ionicons
            name="person-circle-outline"
            size={60}
            color="white"
            style={styles.avatarIcon}
          />
          <View style={styles.nameAndTitle}>
            <TextInput
              style={styles.nameInput}
              placeholder="Nome"
              placeholderTextColor="#fff"
              value={name}
              onChangeText={setName}
            />
            <Text style={styles.subtitle}>IT Assistant</Text>
          </View>
        </View>

        {/* Opções */}
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Avatar</Text>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Perfil de voz</Text>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Conexão IoT</Text>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>

        {/* Botões de Ação */}
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Restaurar</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Botão voltar */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Botão histórico */}
      <TouchableOpacity style={styles.historyButton}>
        <Ionicons name="document-text-outline" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8bd3f7',
    paddingTop: 60,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarIcon: {
    marginRight: 15,
  },
  nameAndTitle: {
    flex: 1,
  },
  nameInput: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingVertical: 5,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
  },
  optionButton: {
    backgroundColor: '#a1d6f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#fff',
  },
  actionButton: {
    backgroundColor: '#68bdf4',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    backgroundColor: '#6cbff7',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  historyButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: '#6cbff7',
    padding: 10,
    borderRadius: 30,
  },
});
