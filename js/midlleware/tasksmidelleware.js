const validateBody = (request, response, next) => {
    const { body } = request;

    if (body.email == undefined){
        return response.status(400).json({message: 'O Campo E-mail é obrigatorio'});
    }
    if (body.email == ''){
        return response.status(400).json({message: 'O Campo E-mail não pode ser vazio'});
    }

    next();
};

module.exports = {
    validateBody,
}