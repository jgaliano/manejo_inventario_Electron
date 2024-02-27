const formulario = document.getElementById('formulario');
const formulario1 = document.getElementById('formulario');


formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
})

function btnAbrirEditar() {
    window.open('ventana_3.html', 'Edición Productos', 'width=650,height=750');
  }

  function btnAbrirSolicitud() {
    window.open('ventana_4.html', 'Edición Productos', 'width=650,height=575');
  }


  function btnAbrirV2() {
    window.open('ventana_2.html', 'Productos Actuales', 'width=1050,height=450');
  }
  