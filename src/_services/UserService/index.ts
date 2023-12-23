import * as RedeSocialApiService from '../RedeSocialApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILogin, IUsuario } from './types';

const login = async (body: ILogin) => {
    const {data} = await RedeSocialApiService.post('/login', body) /*como ja tem abase pronta da url da api...so colocar a barra e a api requerida*/
    await AsyncStorage.setItem('token',  data.token)
    atualizarUsuarioAtual()
}

const cadastro = async (body: FormData) => {
    await RedeSocialApiService.post('/cadastro', body, {"content-Type": "Multipart/form-data"})
}

const atualizarUsuarioAtual = async () => {
    const usuario = await RedeSocialApiService.get('/usuario')
    await AsyncStorage.setItem('nome', usuario.data.nome)
    await AsyncStorage.setItem('email', usuario.data.email)
    await AsyncStorage.setItem('id', usuario.data._id)
    await AsyncStorage.setItem('avatar', usuario.data.avatar)
}

const getUsuarioAtual = async () => {
    const usuario: IUsuario = {
        nome: await AsyncStorage.getItem('nome'),
        id: await AsyncStorage.getItem('id'),
        email: await AsyncStorage.getItem('email'),
        token: await AsyncStorage.getItem('token'),
        avatar: await AsyncStorage.getItem('avatar')
    }

    return usuario
}

const pesquisar = async (filtro: string) => {
    return await RedeSocialApiService.get(`/pesquisa?filtro=${filtro}`)
}
const getPerfil = async (id: string) => {
    return await RedeSocialApiService.get(`/pesquisa?id=${id}`)
}

export {login, getUsuarioAtual, cadastro, pesquisar, getPerfil}