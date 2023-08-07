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

function diasMesesAnos() {
    const form = document.getElementById('myform');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const diaAtual = new Date().getDate();
        const mesAtual = new Date().getMonth() + 1;
        const anoAtual = new Date().getFullYear();

        const dia = parseInt(document.getElementById('iday').value);
        const mes = parseInt(document.getElementById('imonth').value);
        const ano = parseInt(document.getElementById('iyear').value);

        const dataNascimento = new Date(ano, mes - 1, dia);
        const dataAtual = new Date(anoAtual, mesAtual - 1, diaAtual);

        let diferencaEmMS = dataAtual - dataNascimento;

        const umAnoEmMS = 1000 * 60 * 60 * 24 * 365;
        const umMesEmMS = 1000 * 60 * 60 * 24 * 30;

        let anos = Math.floor(diferencaEmMS / umAnoEmMS);
        let meses = Math.floor((diferencaEmMS % umAnoEmMS) / umMesEmMS);
        let dias = Math.floor(((diferencaEmMS % umAnoEmMS) % umMesEmMS) / (1000 * 60 * 60 * 24));

        const strdia = document.getElementById('day');
        strdia.textContent = dias;

        const strmes = document.getElementById('month');
        strmes.textContent = meses;

        const strano = document.getElementById('year');
        strano.textContent = anos;
    })
}


diasMesesAnos()

