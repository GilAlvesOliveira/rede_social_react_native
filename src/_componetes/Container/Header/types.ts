export interface IHeader{
    default?: boolean,
    barraPesquisa?: IBarraPesquisa
    headerNovaPublicacao?: IHeaderNovaPublicacao
    perfilHeader?: IPerfilHeader
}

export interface IHeaderNovaPublicacao {
    onPressCancelar: () => void
    onPressContinuar: () => void
    ContinueDefault: boolean
}

export interface IBarraPesquisa{
    value: string,
    onChange: (value: string) => void
}

export interface IPerfilHeader{
    usuarioNome: string,
    perfilExterno: boolean,

}