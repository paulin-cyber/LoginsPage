function clicamento() {
    const usuario = document.getElementById('username').value.trim()
    const senha = document.getElementById('password').value.trim()
    const resultado = document.getElementById('resultado')
    if (usuario == "admin" && senha == "1234") {
        resultado.innerText = 'Login correto'
        resultado.style.color = 'rgb(5, 255, 9)'
        setTimeout(()=>{
            location.href = "https://paulin-cyber.github.io/TrabalhoProjeto/"
        }, 1000)
    }

    else if (usuario == "paulo" && senha == "6769") {
        resultado.innerText = 'Login correto'
        resultado.style.color = 'rgb(5, 255, 9)'
        setTimeout(()=>{
            location.href = "https://paulin-cyber.github.io/TrabalhoProjeto/"
        }, 1000)
    }
    else if (usuario == "" || senha == ""){
        resultado.innerText = 'Preencha os campos obrigatórios'
        resultado.style.color = 'rgb(0, 0, 0)'
        setTimeout(() => {
            resultado.innerText = ''
        }, 4000)
    }
    else {
        resultado.innerText = 'Usuário ou senha incorretos'
        resultado.style.color = 'rgb(150, 0, 0)'
        setTimeout(() => {
            resultado.innerText = ''
        }, 4000)
    }
}
function tema(){
    document.body.classList.toggle('dark')
    const botao = document.querySelector('.sla')
}