
export const validate = values => {
    const errors = {}

    if (!values.title) {
        errors.title = 'Campo obrigatório'
    } else if (values.title.length < 4) {
        errors.title = 'Mínimo 5 caracteres'
    }

    if (!values.author) {
        errors.author = 'Campo obrigatório'
    } else if (values.author.length < 4) {
        errors.author = 'Mínimo 5 caracteres'
    }

    if (!values.year) {
        errors.year = 'Campo obrigatório'
    }

    if (values.description && values.description.length < 4) {
        errors.description = 'Mínimo 5 caracteres'
    }

    return errors
}