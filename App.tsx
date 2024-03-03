import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import Rotas from './src/_rotas';
import { useEffect } from 'react';

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    'biennale-bold': require('./assets/fonts/Biennale-Bold.otf'),
    'biennale': require('./assets/fonts/Biennale-Regular.otf'),
  });

  const onLayoutRootView = async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    onLayoutRootView();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Rotas />
    </NavigationContainer>
  );
}