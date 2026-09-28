let carro = {
    marca: "Wolkswagen",
    modelo: "\nNivus",
    ano: "\n2023",

    getDescricao: function(){
        return "Marca: " + this.marca + "Modelo: " + this.modelo + "Ano: " + this.ano
    }

};

console.log(carro.getDescricao())