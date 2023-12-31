import React, { useCallback, useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View, Text, Image } from "react-native"
import { IUsuarioData } from "../../../../_services/UserService/types";
import * as UserService from '../../../../_services/UserService';
import { ActivityIndicator } from "react-native";
import { colors } from  '../../../../../app.json';
import styles from "./styles";
import Avatar from "../../../Avatar";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../_rotas/RootStackParams";

const Pesquisar = (props: {filtro: string}) => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Home'>
    const navigation = useNavigation<navigationTypes>()

    const[usuarios, setUsuarios] = useState<IUsuarioData[]>([])
    const[estaCarregando, setEstaCarregando] = useState<boolean>(false)

    useEffect(() => {
        setUsuarios([])
        if(props.filtro.length > 2) {
            buscarUsuario()
        }
    },[props.filtro])

    const buscarUsuario = useCallback(async () => {
        try {
            setEstaCarregando(true)
            const {data} = await UserService.pesquisar(props.filtro)
            const usuariosFormatado: IUsuarioData[] = data?.map((usuario: any, index: number) => {
                const usuarioFormatado: IUsuarioData = {
                    id: usuario._id,
                    nome: usuario.nome,
                    email: usuario.email,
                    avatar: usuario.avatar,
                    seguidores: usuario.seguidores,
                    seguindo: usuario.seguindo,
                    publicacoes: usuario.publicacoes,
                    index: index,
                    segueEsseUsuario: false
                }
                return usuarioFormatado
            })

            setUsuarios(usuariosFormatado)
            setEstaCarregando(false)

        }catch(erro: any) {
            setEstaCarregando(false)
        }
    }, [usuarios])

    const renderItem = (usuario: IUsuarioData) => (
        <TouchableOpacity onPress={() => navigation.navigate('Perfil', usuario)} style={usuario.index && usuario.index % 2 != 0? styles.backgroundImpar : styles.backgroundPar}>
            <View style={styles.row} >
                <View>
                    <Avatar usuario={usuario} />
                </View>
                <View>
                    <Text style={styles.nome} >{usuario.nome}</Text>
                    <Text style={styles.email} >{usuario.email}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={styles.conatiner}>
            {usuarios.length > 0 && 
               <FlatList
               data={usuarios}
               keyExtractor={item => item.id.toString()}
               renderItem={({ item }) => renderItem(item)}
               onEndReachedThreshold={0.1}
               ListFooterComponent={() => (
                    estaCarregando ?
                    <View>
                        <ActivityIndicator size={30} color={colors.primaryColor} />
                    </View>
                    :
                    null
                    )}
               />
            }


        </View>
    )
}

export default Pesquisar;