
export const validate = values => {
    const errors = {}

    if (!values.password) {
        errors.password = 'Campo obrigatório'
    } else if (values.password.length < 4) {
        errors.password = 'Mínimo 5 caracteres'
    }

    if(values.phone) {
        if(values.phone.length < 9)
            errors.phone = 'Preencha corretamente'
    }

    if (!values.name) {
        errors.name = 'Campo obrigatório'
    } else if (values.name.length < 4) {
        errors.name = 'Mínimo 5 caracteres'
    }

    return errors
}