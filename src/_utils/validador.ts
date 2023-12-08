const validarNome = (name: string) : boolean => {
    return name.length > 2
}

const validarEmail = (email: string) : boolean => {
    return email.length > 5 && email.includes("@") && email.includes(".")
}

const validarSenha = (password: string) : boolean => {
    return password.length > 3
}

const confirmarSenha = (password: string, confirmarSenha: string) : boolean => {
    return password === confirmarSenha
}

export {validarNome, validarEmail, validarSenha, confirmarSenha}