import {  Text, TouchableOpacity, View } from 'react-native';
import Botao from '../../../src/_componetes/Botao';
import Input from '../../../src/_componetes/Input';
import { useEffect, useState } from 'react';
import UploadImagem from '../../_componetes/UploadImagem';
import styles from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../_rotas/RootStackParams';
import { useNavigation } from '@react-navigation/native';
import * as UserService from '../../_services/UserService';
import comunStyles from '../../comumStyles';
import { validarConfirmarSenha, validarEmail, validarNome, validarSenha } from '../../_utils/validador';


const Cadastro = () => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Cadastro'>
  const navigation = useNavigation<navigationTypes>()

  const [erro, setErro] = useState<string>('')
  const [imagem, setImagem] = useState<any>(null)
  const [nome, setNome] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [confirmarSenha, setConfirmarSenha] = useState<string>('')

  const efetuarCadastro = async () => {  /*para efetuar o login*/
  try{
    setLoading(true)
    const body = new FormData()
    body.append('nome', nome)
    body.append('email', email)
    body.append('senha', senha)
    if(imagem) {
      const file: any = {
        uri: imagem.uri,
        type: `imagem/${imagem.uri?.split('/').pop().split('.').pop()}`,
        nome: imagem.uri.split('/').pop()
      }
      body.append("file", file)
    }
    await UserService.cadastro(body)
    await UserService.login({login: email, senha: senha})
    setLoading(false)
    navigation.navigate('Home')  /*navigation.navigate('') é a rora para onde vai ir a pagina*/
  } catch(error: any){
    setErro('Erro ao efetuar o cadastro, tente novamnete.')
    setLoading(false)
    console.log('teste123', error);
    
  }
}

  const formularioValido= () => {
    const nomeValido = validarNome(nome)
    const emailValido = validarEmail(email)
    const senhaValido = validarSenha(senha)
    const confirmarSenhaValido = validarConfirmarSenha(senha, confirmarSenha)
    setErro('')
    if (!nomeValido && nome != '') {
        setErro('Nome invalido!')
    }
    else if (!emailValido && email != '') {
        setErro('Email invalido!')
    } else if (!senhaValido && senha != '') {
        setErro('Senha invalida!')
    } else if (!confirmarSenhaValido && confirmarSenha != '') {
        setErro('Confirmacao de senha nao confere')
    } else {
      setErro('')
    }
}

    useEffect(() => {
      formularioValido()
    }, [nome, email, senha, confirmarSenha])

  return (
    <View style={styles.container}>

      <UploadImagem setImagem={setImagem} imagem={imagem}/>
      
      {erro != '' && <Text style={comunStyles.textErro}>{erro}</Text>}

      <Input 
          onChange={(e: string) => setNome(e)}
          placeholder={"Nome completo"}
          icone={require('../../_assets/imagens/usuarioAtivo.png')}
          value={nome}/>
          
      <Input 
          onChange={(e: string) => setEmail(e)}
          placeholder={"Email"}
          icone={require('../../_assets/imagens/envelope.png')}
          value={email}/>

      <Input 
          onChange={(e: string) => setSenha(e)}
          placeholder={"Senha"}
          secureTextEntry={true}
          icone={require('../../_assets/imagens/key.png')}
          value={senha}/>
          
      <Input 
          onChange={(e: string) => setConfirmarSenha(e)}
          placeholder={"Confirme sua senha"}
          secureTextEntry={true}
          icone={require('../../_assets/imagens/key.png')}
          value={confirmarSenha}/>          

      <Botao onPress={() => efetuarCadastro() } placeholder="Cadastrar" loading={loading} disabled={erro != '' || nome == '' || email == '' || senha == '' || confirmarSenha == ""}/>

      <View style={styles.containerWithOutAccount}>
        <Text>Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textCadastroAgora}>Faça o seu login agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Cadastro;