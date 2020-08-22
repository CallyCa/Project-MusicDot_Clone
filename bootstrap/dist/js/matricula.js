var $tdTotalCursos = document.querySelector('.js-total-de-cursos')
var $tdTotalDeHoras = document.querySelector('.js-total-de-horas')
var $buttonConfirmar = document.querySelector('.js-botao-matricula')

var totalHoras = 0
var totalCursos = 0

function adicionarCurso(checkbox){

    if(checkbox.checked){
        totalCursos +=1
        totalHoras += parseInt(checkbox.value)

    } else{
        totalCursos -= 1
        totalHoras -= parseInt(checkbox.value)
    }
    $tdTotalDeHoras.textContent = totalCursos + 'h'
    $tdTotalCursos.textContent = totalCursos + 'curso(s)'
}

$buttonConfirmar.onclick = confirmarMatriculas

function confirmarMatriculas(){

    if(totalCursos == 0){
        alert('Nenhum curso selecionado')
    }else{
        alert('Matrícula confirmada nos cursos!')
        window.location.href= 'index.html'
    }
}