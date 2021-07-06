var open = document.getElementById('open');
var modal_container = document.getElementById('modal_container');
var seccion = document.getElementById('imagenes');
var close = document.getElementById('close');

open.addEventListener('click', () => {
	modal_container.classList.add('show');
	seccion.classList.add('hidden');


});



close.addEventListener('click', () => 
{
	modal_container.classList.remove('show');
	seccion.classList.remove('hidden');
});

