import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from '../_screens/Login';
import Cadastro from '../_screens/cadastro';
import Home from '../_screens/Home';

const Rotas = () => {
    const Stack/*pilhas*/ = createNativeStackNavigator();
    return (
        <Stack.Navigator 
          screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    )
}

export default Rotas