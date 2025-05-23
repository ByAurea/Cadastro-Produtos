const paragrafo = document.getElementById("paragrafo")
const form = document.getElementById("form")
const inputNome = document.getElementById("nome")
const inputPreco = document.getElementById("preco")
const inputCategoria = document.getElementById("categoria")
const btnCadastrar = document.getElementById("btnCadastrar")
const cadastros = document.getElementById("cadastros")

btnCadastrar.addEventListener("click", function clicar(event){
    event.preventDefault()

    const nome = inputNome.value;
    const preco = inputPreco.value;
    const categoria = inputCategoria.value;

    if(nome === "" || preco === "" || categoria === "" || preco == 0 ){
        paragrafo.textContent = "Preenchimento Incorreto"
        paragrafo.style.color = "#ff0000"
        // paragrafo.classList.add("mensagem-erro")
        paragrafo.setAttribute("placeholder","Clique aqui")
        return
    }

    const cardProdutos = document.createElement('div')
    cardProdutos.innerHTML = `
        <p>Nome: ${nome}</p>
        <p>Preço: R$${parseFloat(preco).toFixed(2)}</p>
        <p>Categoria: ${categoria}</p> `

        if (categoria === "Tecnologia") {
            cardProdutos.style.fontWeight = "bold";
         } else if (categoria === "Alimentos") {
            cardProdutos.style.backgroundColor = "yellow";}

         

    cadastros.append(cardProdutos)
    form.reset()
})
