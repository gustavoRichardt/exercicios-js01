let contaBancaria = {
    saldo: 50000,
    titular: "Gustavo",

    verSaldo: function() {
        return this.saldo
    },

    depositar: function(valor) {
        return this.saldo = this.saldo + valor
    },

    sacar: function(valor) {
        return this.saldo = this.saldo - valor
    },
};

console.log(contaBancaria.verSaldo());

conta.depositar(500);
console.log(contaBancaria.verSaldo());

conta.sacar(200);
console.log(contaBancaria.verSaldo());