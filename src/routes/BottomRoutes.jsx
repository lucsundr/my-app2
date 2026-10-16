
// Arquivo responsável pela navegação por abas inferiores.

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Product from "../screens/Product";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";

// Cria o navegador de abas
const Bottom = createBottomTabNavigator();

export function BottomRoutes() {
  return (
    <Bottom.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#7C3AED",
        tabBarInactiveTintColor: "#9CA3AF",
      }}
    >
      <Bottom.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Bottom.Screen
        name="product"
        component={Product}
        options={{
          tabBarLabel: "Produtos",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="shopping-cart"
              size={size}
              color={color}
            />
          ),
          tabBarBadge: 3,
        }}
      />

      <Bottom.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="person"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Bottom.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: "Configurações",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="settings"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}
