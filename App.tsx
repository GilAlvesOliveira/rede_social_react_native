import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Botao from './src/_componetes/Botao';
import Input from './src/_componetes/Input';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState<string>('')

  const [fontsLoaded] = useFonts({
    'Biennale.bold': require('./assets/fonts/Biennale.Bold.otf'),
    'Biennale.Regular': require('./assets/fonts/Biennale.Regular.otf'),
  });
  return (
    fontsLoaded ?
    <View style={styles.container}>
      <Botao onPress={() => { } } placeholder="Clique aqui" loading={false} disabled={false}/>
      <Input 
          onChange={(e: string) => setEmail(e)}
          placeholder={"Digite o seu email"}
          value={email}
          />
      <Text style={{fontFamily: 'Biennale.bold'}}>Teste!</Text>
      <StatusBar style="auto" />
    </View> : 
    <AppLoading />
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
