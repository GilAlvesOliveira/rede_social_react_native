export interface IHeader{
    default?: boolean,
    barraPesquisa?: IBarraPesquisa
    perfilHeader?: IPerfilHeader
    editarPerfilHeader?: IEditarPerfilHeader
    publicacaoHeader?: IPublicacaoHeader
}

export interface IBarraPesquisa{
    value: string,
    onChange: (value: string) => void
}

export interface IPerfilHeader{
    usuarioNome: string,
    perfilExterno: boolean,
}

export interface IEditarPerfilHeader {
    submit: () => void,
    submiHabilitar?: boolean
}

export interface IPublicacaoHeader {
    submit: () => void,
    submiHabilitar?: boolean
}