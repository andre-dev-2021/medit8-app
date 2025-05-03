import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import Inicial from './screens/Inicial';
import Cadastro from './screens/Cadastro';
import Painel from './screens/Painel';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Inicial'>
          <Stack.Screen name='Inicial' component={Inicial}/>
          <Stack.Screen name='Cadastro' component={Cadastro}/>
          <Stack.Screen name='Painel' component={Painel}/>
          <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
