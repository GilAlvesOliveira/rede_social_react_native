import { IUsuario } from "../../../_services/UserService/types";
import { IComentario } from "../Comentarios/types";

export interface IPost {
    id: string,
    usuario: IUsuario,
    imagem: string,
    descricao: string,
    likes: string[],
    comentarios: IComentario[]
}