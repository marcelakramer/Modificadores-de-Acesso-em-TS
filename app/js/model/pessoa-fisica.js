class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, cpf) {
        super(nome, idade, dataNascimento);
        this._nome += ' - Física';
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
}
