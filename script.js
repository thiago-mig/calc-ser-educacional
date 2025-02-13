const log = document.querySelector('.log');
const selIES = document.querySelector("[name='ies']");
const title = document.querySelector('.title');
const gradeFields = document.querySelectorAll('.nota');
const nota1 = document.querySelector('.nota-1');
const nota2 = document.querySelector('.nota-2');
const nota3 = document.querySelector('.nota-3');
const nota4 = document.querySelector('.nota-4');
const btnCalcular = document.querySelector('.btn-calc');
const pResult = document.querySelector('.resposta');


const clear = () => {
  nota1.value = '';
  nota2.value = '';
  nota3.value = '';
  nota4.value = '';
  pResult.innerText = '- -';
}

const validate = (e) => {
  if (selIES.value !== "UNIFAEL") {
    if (Number(e.target.value) > 10 || Number(e.target.value) < 0) {
      e.target.value = '';
    }
  } else {
    if (Number(e.target.value) > 100 || Number(e.target.value) < 0) {
      e.target.value = '';
    }
  }
}

selIES.addEventListener('change', (e) => {
  title.innerText = `Calcule sua média AV1 - ${e.target.value}`;
  clear();
  if(e.target.value === "UNIFAEL"){
    nota4.parentNode.style.display = 'none';
  }else{
    nota4.parentNode.style.display = 'flex';
  }
});

const calcularMedia = () => {
  if (selIES.value !== "UNIFAEL") {
    const media = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value) + Number(nota4.value)) / 4;
    const resultado = (media * 0.2).toFixed(2);
    pResult.innerText = resultado;
  } else {
    const media = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3;
    const resultado = ((media * 0.2) / 10).toFixed(2);
    pResult.innerText = resultado;
  }
}

gradeFields.forEach((field) => {
  field.addEventListener('focusout', validate);
});

btnCalcular.addEventListener('click', (e) => {
  e.preventDefault();
  calcularMedia();
});
window.onload = () => {
  title.innerText = `Calcule sua média AV1 - ${selIES.value}`;
}
//apenas para testes
const consologar = (variavel) => {
  log.innerHTML = variavel;
}
