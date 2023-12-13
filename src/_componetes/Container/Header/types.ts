export interface IHeader{
    default?: boolean,
    barraPesquisa?: IBarraPesquisa
    headerNovaPublicacao?: IHeaderNovaPublicacao

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