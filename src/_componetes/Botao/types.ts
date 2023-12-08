/*neste type o i no botao seria de interface*/

export interface IBotao{
        placeholder: string, 
        onPress: () => void,
        style?: any,
        disabled?: boolean,
        loading?: boolean
    }