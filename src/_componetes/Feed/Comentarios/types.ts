import { IUsuario } from "../../../_services/UserService/types"

export interface IComentario {
    nome: string,
    menssagem: string,
    usuarioId: string
}

export interface IComentarioComponente {
    idPost: string, 
    comentarios: IComentario[], 
    comentarioInputAtivo: boolean, 
    usuarioLogado: IUsuario,
}