let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

//console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
//console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
//console.log('Conta Bonificada: ' + cb1.saldo);

// Testando modificadores de acesso

const pessoa = new Pessoa('marcela', 19, new Date(2004, 1, 27));
const pessoaFisica = new PessoaFisica('juan', 19, new Date(2004, 11, 29), '123');
const pessoaJuridica = new PessoaJuridica('matheus', 19, new Date(2005, 1, 29), '1234');

console.log('Pessoa:');
console.log('Nome: ', pessoa.nome);
console.log('Idade: ', pessoa.idade);
console.log('Data de nascimento: ', pessoa.dataNascimento);
console.log('------------------------');
console.log('Pessoa Física:');
console.log('Nome: ', pessoaFisica.nome);
console.log('Idade: ', pessoaFisica.idade);
console.log('Data de nascimento: ', pessoaFisica.dataNascimento);
console.log('CPF: ', pessoaFisica.cpf)
console.log('------------------------');
console.log('Pessoa Jurídica:');
console.log('Nome: ', pessoaJuridica.nome);
console.log('Idade: ', pessoaJuridica.idade);
console.log('Data de nascimento: ', pessoaJuridica.dataNascimento);
console.log('CNPJ: ', pessoaJuridica.cnpj)

