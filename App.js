import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalProvider } from './src/contexts/global-context';
import { AppNavigator } from './src/navigation/appNavigator';
import HomeScreen from './src/screens/home';
import Post from './src/screens/post';
import Posts from './src/screens/posts';

export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <AppNavigator.Navigator>
          <AppNavigator.Screen 
            name="home" 
            component={HomeScreen}
            options={{title: "Lista de usuarios"}}
          />
          <AppNavigator.Screen 
            name="posts" 
            component={Posts}
            options={{title: "Posts"}}
          />
          <AppNavigator.Screen
            name="post"
            component={Post}
            options={{title: "Detalles"}}
          />
        </AppNavigator.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
