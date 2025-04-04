import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000); // Simula um carregamento de 3 segundos
  }, []);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo_provisorio.png')} 
        style={styles.logo}
      />
      <ActivityIndicator size="large" color="#fff" style={styles.spinner} />
      <Text style={styles.text}>Carregando assistente...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333', // Cor de fundo escura
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150, 
    height: 150,
    marginBottom: 20, 
  },
  spinner: {
    marginBottom: 20, 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
  },
});
