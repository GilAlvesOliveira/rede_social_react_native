import { Image, Text, TouchableOpacity, View } from 'react-native';
import Botao from '../../../src/_componetes/Botao';
import Input from '../../../src/_componetes/Input';
import { useCallback, useEffect, useState } from 'react';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../_rotas/RootStackParams';
import * as UserService from '../../_services/UserService';
import comunStyles from '../../comumStyles';

const Login = () => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Login'>
  const navigation = useNavigation<navigationTypes>()

  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const [erro, setErro] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    verifcarLogin()
  },[])

  const efetuarLogin = async () => {  /*para efetuar o login*/
    try{
      setLoading(true)
      await UserService.login({login: email, senha: senha})
      setLoading(false)
      navigation.navigate('Home')  /*navigation.navigate('') é a rora para onde vai ir a pagina*/
    } catch(error: any){
      setErro('Erro ao efetuar o Login, tente novamnete.')
      setLoading(false)
    }
  }

  const verifcarLogin = useCallback(async () => {
     const usuario = await UserService.getUsuarioAtual()
      if(usuario?.token) {
        navigation.navigate('Home')
      }
  }, [])

  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={require('../../_assets/imagens/Logo.png')}/>

      {erro != '' && <Text style={comunStyles.textErro}>{erro}</Text>}

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

      <Botao onPress={() => efetuarLogin()} placeholder="Login" loading={loading} disabled={!email || !senha}/>

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