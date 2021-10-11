// console.log('Hola');

const formularioBuscar = document.querySelector('#searchform #s');

formularioBuscar.className += 'form-control mb-2'; 
const BotonBuscar = document.querySelector('#searchsubmit');
BotonBuscar.className += 'form-control btn btn-primary btn-block';
const listaEntradas = document.querySelector('.widget ul');
console.log(listaEntradas);
listaEntradas.className += ' list-group';
listaEntradas.querySelectorAll('li').forEach(item => {
    item.className += ' list-group-item';
});
