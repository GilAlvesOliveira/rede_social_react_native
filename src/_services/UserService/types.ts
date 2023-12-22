export interface ILogin {
    login: string,
    senha: string
}

export interface IUsuario {
    id: string | null,
    nome: string | null,
    email: string | null,
    token: string| null,
    avatar: string | null
}

export interface IUsuarioData {
    id: string,
    nome: string,
    email: string,
    avatar: string,
    seguidores: number,
    seguindo: number,
    publicacoes: number,
    index?: number
}