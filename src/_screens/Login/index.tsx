import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Botao from '../../../src/_componetes/Botao';
import Input from '../../../src/_componetes/Input';
import { useState } from 'react';
import UploadImagem from '../../../src/UploadImagem';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../_rotas/RootStackParams';

const Login = () => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Login'>
  const navigation = useNavigation<navigationTypes>()

  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../_assets/imagens/Logo.png')}/>
      <Input 
          onChange={(e: string) => setEmail(e)}
          placeholder={"Digite o seu email"}
          icone={require('../../_assets/imagens/envelope.png')}
          value={email}/>

      <Input 
          onChange={(e: string) => setSenha(e)}
          placeholder={"Digite a sua senha"}
          secureTextEntry={true}
          icone={require('../../_assets/imagens/key.png')}
          value={senha}/>          

      <Botao  onPress={() => { } } placeholder="Login" loading={false} disabled={false}/>

      <View style={styles.containerWithAccount}>
        <Text>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.textCadastroAgora}>Faça seu cadastro agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;