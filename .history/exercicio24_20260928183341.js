let lanche = {
    nome: "X-Burguer",
    preco: 15,
    ingredientes: ["pão", "hambúrguer", "queijo", "alface"],

    frase: function() {
        console.log("O lanche ${nome} custa R$ ${preco}")
    }
};

console.log(frase)