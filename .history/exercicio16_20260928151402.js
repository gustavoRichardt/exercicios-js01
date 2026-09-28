const prompt = require('prompt-sync')(); 

let contaBancaria = {
    saldo: "50000",
    titular: "Gustavo",

    getDepositar: function(valor) {
        return this.saldo = this.saldo + valor
    },

    getSacar: function(valor) {
        return this.saldo = this.saldo - valor
    }

}