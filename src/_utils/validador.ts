const validarNome = (nome: string) : boolean => {
    return nome.length > 2
}

const validarEmail = (email: string) : boolean => {
    return email.length > 5 && email.includes("@") && email.includes(".")
}

const validarSenha = (senha: string) : boolean => {
    return senha.length > 3
}

const validarConfirmarSenha = (senha: string, confirmarSenha: string) : boolean => {
    return senha === confirmarSenha
}

export {validarNome, validarEmail, validarSenha, validarConfirmarSenha}