const prompt = require('prompt-sync')(); 


let carro = {
    marca: "Wolkswagen\n",
    modelo: "Nivus\n",
    ano: "2023",

    getIdade: function() {
        return 2026 - this.ano
    },

    getDescricao: function(){
        return "Marca: " + this.marca + "Modelo: " + this.modelo + "Ano: " + this.ano
    }

};

console.log("Marca:" ,carro.marca);
carro.ano = "2025\n";
console.log("Ano do carro:" ,carro.ano);
console.log(carro.getDescricao());
console.log("Idade do carro:" ,carro.getIdade());