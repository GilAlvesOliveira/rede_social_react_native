import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/_rotas';

export default function App() {
  const [fontsLoaded] = useFonts({
    'biennale-bold': require('./assets/fonts/Biennale-Bold.otf'),
    'biennale': require('./assets/fonts/Biennale-Regular.otf'),
  });
  return (
    fontsLoaded ?
      <NavigationContainer>
        <Rotas />
      </NavigationContainer>
      : 
      <AppLoading />
  );
}