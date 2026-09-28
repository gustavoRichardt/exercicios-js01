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

console.log(carro.getDescricao());
console.log(""carro.getIdade());