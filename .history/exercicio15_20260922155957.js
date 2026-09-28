let carro = {
    marca: "Wolkswagen",
    modelo: "\nNivus",
    ano: "\n"2023,

    getDescricao: function(){
        return "Marca: " + this.marca + "Modelo: " + this.modelo + "Ano: " + this.ano
    }

};

console.log(carro.getDescricao())