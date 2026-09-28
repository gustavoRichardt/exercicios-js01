let carro = {
    marca: "Wolkswagen",
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
console.log(carro.getDescricao());
console.log("Idade do carro:" ,carro.getIdade());