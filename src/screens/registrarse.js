import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Correo Electronico" 
        keyboardType="email-address"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Nombres"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Apellidos"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Contraseña" 
        secureTextEntry
      />
      <TextInput 
        style={styles.input} 
        placeholder="Telefono"
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4E1D2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  button: {
    width: '80%',
    backgroundColor: '#C8E6C9',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  }
});