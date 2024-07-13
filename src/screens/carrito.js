import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const cartItems = [
  { id: '1', name: 'Coca Cola', image: 'https://path-to-coca-cola-image' },
  // Añade más productos si es necesario
];

const CartScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartItemImage} />
      <Text style={styles.cartItemName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: $0.00</Text>
        <Text style={styles.addressText}>Entrega: Avenida Aguilares, 218 San Salvador</Text>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Ir al pago</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6e6',
    padding: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
  },
  cartItemImage: {
    width: 50,
    height: 50,
  },
  cartItemName: {
    marginLeft: 10,
    fontSize: 18,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
  },
  addressText: {
    fontSize: 16,
    color: '#888',
    marginVertical: 5,
  },
  payButton: {
    backgroundColor: '#0f0',
    padding: 10,
    borderRadius: 5,
  },
  payButtonText: {
    fontSize: 18,
  },
});

export default CartScreen;