const prompt = require('prompt-sync')(); 

let contaBancaria = {
    saldo: 50000,
    titular: "Gustavo",

    getDepositar: function(valor) {
        return this.saldo = this.saldo + valor
    },

    getSacar: function(valor) {
        return this.saldo = this.saldo - valor
    },
};

console.log(contaBancaria.verSaldo());
conta.depositar(500);
console.log(conta.verSaldo());

conta.sacar(200);
console.log(conta.verSaldo());