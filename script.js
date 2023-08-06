function validarFormulario(){
    const form = document.getElementById('myform');
    
    form.addEventListener('submit', function(event){

        event.preventDefault();

        const day = document.getElementById('iday');
        const month = document.getElementById('imonth');
        const year = document.getElementById('iyear');

        const dia = parseInt(day.value);
        const mes = parseInt(month.value);
        const ano = parseInt(year.value);

        const dataAtual = new Date().getFullYear();
        
        const meses31 = [1, 3, 5, 7, 8, 10, 12];

        if (ano > dataAtual || ano < 1990 ){
            alert(`Por favor insirar o ano entre 1990 à ${dataAtual}`)
        } if (dia === 31 && meses31.includes(mes) === false){
            alert('Digite um dia válido!')
        }

    })}
validarFormulario()

function diasMesesAnos(){
    const form = document.getElementById('myform');
    const inputs = document.querySelectorAll('input')

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const dia = parseInt(document.getElementById('iday').value);

        const mes = parseInt(document.getElementById('imonth').value);

        const ano = parseInt(document.getElementById('iyear').value);

        

        const diaAtual = new Date().getDate();
        const mesAtual = new Date().getMonth();
        const anoAtual = new Date().getFullYear();

        let anoNasc = anoAtual - ano;
        let mesNas = 0;
        let diaNasc = 0


        if (mes < mesAtual || (mes === mesAtual && dia <= diaAtual)){
            mesNas = mesAtual - mes;
        }else{
            anoNasc = anoNasc - 1;
        }

        if (dia <= diaAtual){
            diaNasc = diaAtual - dia;
        }else{
            mesNas = mesNas - 1
        }

        const strdia = document.getElementById('day');
        strdia.textContent = diaNasc;

        const strmes = document.getElementById('month');
        strmes.textContent = mesNas;

        const strano = document.getElementById('year');
        strano.textContent = anoNasc;

    })
    
}

diasMesesAnos()

