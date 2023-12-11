
// FUNCION HEADER------------------------------------------------------------------------------------------------------------

var header = document.querySelector(".page-header");
var sticky = "is-sticky";
var stickyTimeout;

window.addEventListener("scroll", () => {
 var currentScroll = window.scrollY;
// al hacer scroll hasta cierto punto de la pagina, el header se convertira en sticky, en este caso en 50
 if (currentScroll > 50) {
    header.classList.add(sticky);
 } 
 else {
    header.classList.remove(sticky);
 }
});



// FUNCION BOTON ENVIAR------------------------------------------------------------------------------------------------------
 function enviar(){
  let words = document.getElementById('campo1').value.split(' ');
  //Verifica que todos los campos esten completos
  if (document.getElementById('campo1').value === '' || 
        document.getElementById('campo2').value === '' || 
        document.getElementById('campo3').value === '' || 
        document.getElementById('campo4').value === '') {
       Swal.fire('', 'Por favor, complete todos los campos antes de enviar', 'error', '')
  //Valida que el Campo1(Name) tenga el siguiente formato: tres palabras, separadas por espacios y que cada palabra empiece por mayuscula
  } else if (words.length !== 3 || !words.every(word => word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase())) {
    Swal.fire('', 'Por favor, ingrese su nombre y dos apellidos en el campo 1, cada palabra comenzando con mayúscula', 'error', '')
  //valida que el campo2(Email), contenga una "@"
  } else if (document.getElementById('campo2').value.includes('@') === false) {
       Swal.fire('', 'El formato del Email no es correcto, verificalo', 'error', '')
  //Verifica que el campo3(Phone) tenga como formato una longitud de 9 caracteres los cuales deben ser si o si numeros 
  } else if (document.getElementById('campo3').value.length !== 9 || isNaN(document.getElementById('campo3').value)) {
       Swal.fire('', 'El formato del numero no es correcto, verificalo', 'error', '')
  //Si todo ocurre a la perfeccion, se muestra el siguiente mensaje
  } else {
       Swal.fire({
         title: '¿Quieres enviar el mensaje?',
         showDenyButton: true,
         showCancelButton: false,
         confirmButtonText: 'ENIVAR',
         denyButtonText: `CANCELAR`,
       }).then((result) => {
  //Si es pulsado el boton de confirmar(ENVIAR) aparecera una alerta de correcto y de los cuatro campos se eliminaran los datos
         if (result.isConfirmed) {
           Swal.fire('', '', 'success', '')
           document.getElementById('campo1').value = '';
           document.getElementById('campo2').value = '';
           document.getElementById('campo3').value = '';
           document.getElementById('campo4').value = '';
         } else if (result.isDenied) {
   
         }
       })
  }
 }




// FUNCION BOTN CANCELAR-------------------------------------------------------------------------------------------------------------------------------------------------------
function eliminar() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: true
  })
  swalWithBootstrapButtons.fire({
    // Al pulsar el boton aparecerá una alerta que pregunta si quieres eliminiar los datos
    title: '¿Quieres eliminar los datos?',
    icon: 'warning',
    showDenyButton: true,
    showCancelButton: false,
    showconfirmButton: false,
    confirmButtonText: 'SI',
    denyButtonText: `NO`,
    reverseButtons: false
  }).then((result) => {
    if (result.isConfirmed) {
      // Elimina los datos de los 4 inputs
      document.getElementById('campo1').value = '';
      document.getElementById('campo2').value = '';
      document.getElementById('campo3').value = '';
      document.getElementById('campo4').value = '';

      swalWithBootstrapButtons.fire(
        'Datos eliminados',
        '',
        'success'
      )
    }
  })
}



