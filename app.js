const paragrafo = document.getElementById("paragrafo")
const form = document.getElementById("form")
const inputNome = document.getElementById("nome")
const inputPreco = document.getElementById("preco")
const inputCategoria = document.getElementById("categoria")
const btnEnviar = document.getElementById("btnEnviar")
const cadastros = document.getElementById("cadastros")

btnEnviar.addEventListener("click", function clicar(event){
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
        <p>Preço: R$${preco}</p>
        <p>Categoria: ${categoria}</p> `

        if (categoria === "Roupas") {
            cardProdutos.style.fontWeight = "bold";
         } else if (categoria === "Acessorios") {
            cardProdutos.style.backgroundColor = "pink";
         }

    cadastros.append(cardProdutos)
    form.reset()
})
