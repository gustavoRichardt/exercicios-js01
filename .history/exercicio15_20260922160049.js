let carro = {
    marca: "Wolkswagen\n",
    modelo: "Nivus\n",
    ano: "2023\n",

    getIdade: function() {
        
    }

    getDescricao: function(){
        return "Marca: " + this.marca + "Modelo: " + this.modelo + "Ano: " + this.ano
    }

};

console.log(carro.getDescricao())