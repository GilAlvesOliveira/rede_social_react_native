import { IUsuario, IUsuarioData } from "../_services/UserService/types";

export type RootStackParamList = {
    Login: undefined;
    Cadastro: undefined,
    Home: undefined,
    NovaPublicacao: undefined,
    Perfil: IUsuarioData | IUsuario
}
