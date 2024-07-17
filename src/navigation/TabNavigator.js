// Navigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


// Screens
import Inicio from '../screens/inicio';
import Editar_perfil from '../screens/editar_perfil';
import Index from '../screens/index';
import Productos from '../screens/productos';
import Registrarse from '../screens/registrarse';
import Carrito from '../screens/carrito';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (

<Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false, // Oculta el header
      tabBarActiveTintColor: '#D87A22', // Color de los íconos activos
      tabBarInactiveTintColor: '#B99873', // Color de los íconos inactivos
      tabBarStyle: { backgroundColor: '#FFF', height: 60, borderTopWidth: 0 }, // Estilo de la barra de pestañas
      tabBarIcon: ({ focused, color, size }) => { // Función que define el ícono de la pestaña
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        }else if (route.name === 'Credito Fiscal') {
          iconName = focused ? 'wallet' : 'wallet-outline';
         } else if (route.name === 'Empleados') {
          iconName = focused ? 'people' : 'people-outline';
        } else if (route.name === 'FacturaConsumidorFinal') {
          iconName = focused ? 'cart' : 'cart-outline';
        }
        else if (route.name === 'FacturaSujetoExcluido') {
          iconName = focused ? 'documents' : 'documents-outline';
        }
        return <Ionicons name={iconName} color={color} size={size} />;
      },
    })}
  >
    <Tab.Screen
      name="Inicio"
      component={Inicio}
      options={{ title: 'Inicio' }}
    />
    <Tab.Screen
        name="Editar_perfil"
        component={Editar_perfil}
        options={{ title: 'EditarPerfil' }}
      />
       <Tab.Screen
        name="Index"
        component={Index}
        options={{ title: 'Index' }}
      />
       <Tab.Screen
        name="Productos"
        component={Productos}
        options={{ title: 'Productos' }}
      />
      <Tab.Screen
        name="Registrarse"
        component={Registrarse}
        options={{ title: 'Registrarse' }}
      />
      <Tab.Screen
        name="Carrito"
        component={Carrito}
        options={{ title: 'Carrito' }}
      />
  </Tab.Navigator>
  
  );
};

export default TabNavigator;