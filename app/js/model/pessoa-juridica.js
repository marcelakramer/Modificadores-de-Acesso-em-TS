class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome, idade, dataNascimento);
        this._nome += ' - Jurídica';
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
}
