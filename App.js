import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from './screens/Inicial';
import Questionario from './screens/Questionario';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Inicial}/>
        <Stack.Screen name='Questionário' component={Questionario}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
