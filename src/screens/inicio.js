import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const categories = ['Gaseosas', 'Jugos', 'Agua'];
const products = [
  { id: '1', name: 'Coca Cola', category: 'Gaseosa', size: '1.25 LT', rating: 4.5, image: 'https://path-to-coca-cola-image' },
  // Añade más productos si es necesario
];

const MainScreen = ({ navigation }) => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryCard}>
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productSize}>{item.size}</Text>
      <Text style={styles.productRating}>Rating: {item.rating}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido.</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        style={styles.categoriesList}
      />
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6e6',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoriesList: {
    marginVertical: 10,
  },
  categoryCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 18,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productSize: {
    fontSize: 16,
  },
  productRating: {
    fontSize: 16,
    color: '#f00',
  },
});

export default MainScreen;