var num = document.querySelector('input#num')
var valores = []
var out = document.getElementById('vlrs')
var res = document.getElementById("res")

function ad(){

    if (!(num.value == '')){

        var n = Number(num.value)

        if(valores.indexOf(n) != -1 || n < 1 || n > 100){

            alert('Valor Inválido ou Já Adicionado')
        }else{
            
            valores.push(n)
            let it = document.createElement('option')
            it.text = `Valor ${n} Adicionado`

            out.appendChild(it)
            res.innerHTML = ''
            
        }
    }else{

        alert('Informe um Número')
    }
    num.value = ''
    num.focus()
}

function anls(){
    
    if (!(valores.length == '')){

        res.innerHTML += `<p>Foram Cadastrados ${valores.length} Valores</p>`

        res.innerHTML += `<p>Maior Valor cadastrado foi ${Math.max.apply(Math, valores)}</p>`

        res.innerHTML += `<p>Menor Valor Cadastrado foi ${Math.min.apply(Math, valores)}</p>`

        var soma = (a, b) => a + b

        res.innerHTML += `<p>Soma dos Valores foi ${valores.reduce(soma)}</p>`

        res.innerHTML += `<p>A média do Valores é ${(valores.reduce(soma)/valores.length).toFixed(1)}</p>`
    }else{

        alert('Informe um Número')
    }
}

function reset(){

    out.innerHTML = ''
    valores = []
    res.innerHTML = ''
}