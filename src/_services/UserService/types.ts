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