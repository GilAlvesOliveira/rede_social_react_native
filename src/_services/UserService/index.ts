import * as RedeSocialApaiService from '../RedeSocialApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILogin } from './types';

const login = async (body: ILogin) => {
    const {data} = await RedeSocialApaiService.post('/login', body) /*como ja tem abase pronta da url da api...so colocar a barra e a api requerida*/
    await AsyncStorage.setItem('token',  data.token)
    atualizarUsuarioAtual()
}

const atualizarUsuarioAtual = async () => {
    const usuario = await RedeSocialApaiService.get('/usuario')
    await AsyncStorage.setItem('nome', usuario.data.nome)
    await AsyncStorage.setItem('email', usuario.data.email)
    await AsyncStorage.setItem('id', usuario.data._id)
    await AsyncStorage.setItem('avatar', usuario.data.avatar)
}


export {login}
