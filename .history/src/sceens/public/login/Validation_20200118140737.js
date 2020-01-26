
export const validate = values => {
    const erros = {}

    if (!values.password) {
        errors.password = 'Campo obrigatório'
    } else if (values.password.length > 4) {
        errors.password = 'Mínimo 5 caracteres'
    }

    if (!values.email) {
        errors.email = 'Campo obrigatório'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Preencha email corretamente'
    }

    return erros
}