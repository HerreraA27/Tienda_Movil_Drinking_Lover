import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductScreen = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://path-to-coca-cola-image' }} style={styles.image} />
      <Text style={styles.title}>Coca Cola, 24 Unidades de 700 Lt</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decrementQuantity} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={incrementQuantity} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>✔</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffe6e6',
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 24,
  },
  quantity: {
    fontSize: 24,
  },
  addButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#0f0',
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 18,
  },
});

export default ProductScreen;