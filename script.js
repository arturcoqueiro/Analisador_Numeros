var num = document.querySelector('input#num')
var valores = []
var out = document.getElementById('vlrs')

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
        }
    }else{

        alert('Informe um Número')
    }
}