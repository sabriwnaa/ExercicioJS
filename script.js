let botao = document.querySelector("button")
botao.addEventListener('click', function(){
    let ano = parseInt(document.querySelector('.ano').value)
    let idade = document.querySelector('h1')
    anoAtual = new Date().getFullYear()
    if((anoAtual - ano) >= 18){
        idade.style.color = "green"
        idade.innerHTML = "Maior de idade"
    } else {
        idade.style.color = "red"
        idade.innerHTML = "Menor de idade"
    }



})