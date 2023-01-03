
const inputCep = document.getElementById('inputCep')
const inputRua = document.getElementById('rua')
const inputBairro = document.getElementById('bairro')
const inputCidade = document.getElementById('cidade')
const inputUf = document.getElementById('uf')
const inputIbge = document.getElementById('ibge')
const msgErro = document.querySelector('.spanErro')


inputCep.addEventListener('blur', () => {
    let cep = inputCep.value

    if (cep.length !== 8) {
        inputCep.classList.add('erro')
        msgErro.innerText = 'o CEP precisa ter 8 digitos.'

        inputRua.value = ''
        inputBairro.value = ''
        inputCidade.value = ''
        inputUf.value = ''
        inputIbge.value = ''

        inputCep.focus()

        return
    } else if(inputCep.classList.contains('erro')) {
        inputCep.classList.remove('erro')
        msgErro.innerText = ''
    }

    

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(json => {

            if(json.erro) {
                msgErro.innerText = 'o CEP informado não existe.'

                inputRua.value = ''
                inputBairro.value = ''
                inputCidade.value = ''
                inputUf.value = ''
                inputIbge.value = ''

                inputCep.focus()

                return
            } else {
                msgErro.innerText = ''
            }

            inputRua.value = json.logradouro
            inputBairro.value = json.bairro
            inputCidade.value = json.localidade
            inputUf.value = json.uf
            inputIbge.value = json.ibge

            inputCep.focus()
        })
})











