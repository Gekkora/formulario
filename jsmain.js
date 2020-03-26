 window.addEventListener('load', function (event) {

     var rut = '';
     var nombre = '';
     var apellidos = '';
     var edad = '';
     var email = '';
     var especialidad = '';
     var fechas = '';
     var horas = '';


     var formulario = document.querySelector('#formulario');

     var error_rut = document.querySelector('#error_rut');
     var error_nombre = document.querySelector('#error_nombre');
     var error_apellidos = document.querySelector('#error_apellidos');
     var error_edad = document.querySelector('#error_edad');
     var error_email = document.querySelector('#error_email');
     var error_especialidad = document.querySelector('#error_especialidad');
     var error_fechas = document.querySelector('#error_fechas');
     var error_horas = document.querySelector('#error_horas');


     error_rut.style.display = 'none';
     error_nombre.style.display = 'none';
     error_apellidos.style.display = 'none';
     error_edad.style.display = 'none';
     error_email.style.display = 'none';
     error_especialidad.style.display = 'none';
     error_fechas.style.display = 'none';
     error_horas.style.display = 'none';


     formulario.addEventListener('submit', function (event) {
         rut = document.querySelector('#rut').value;
         nombre = document.querySelector('#nombre').value;
         apellidos = document.querySelector('#apellidos').value;
         edad = document.querySelector('#edad').value;
         email = document.querySelector('#email').value;
         especialidad = document.querySelector('#especialidad').value;
         fechas = document.querySelector('#fechas').value;
         horas = document.querySelector('#horas').value;


         if (rut == null || rut <= 0 || isNaN(rut)) {
             alert('Rut no ingresado');
             error_rut.innerHTML = 'Rut no es valido';
             error_rut.style.display = 'block';
             return false;
         } else {
             error_rut.style.display = 'none';
         }

         if (nombre.trim() == null || nombre.trim().length == 0) {
             alert('El nombre no está ingresado');
             error_nombre.innerHTML = 'El nombre no es valido';
             error_nombre.style.display = 'block';
             return false;
         } else {
             error_nombre.style.display = 'none';
         }

         if (apellidos.trim() == null || apellidos.trim().length == 0) {
             alert('Apellidos no están ingresados');
             error_apellidos.innerHTML = 'Apellidos no son validos';
             error_apellidos.style.display = 'block';
             return false;
         } else {
             error_apellidos.style.display = 'none';
         }

         if (edad == null || edad <= 0 || isNaN(edad)) {
             alert('Edad no ingresada');
             error_edad.innerHTML = 'Edad no es valida';
             error_edad.style.display = 'block';
             return false;
         } else {
             error_edad.style.display = 'none';
         }


         if (email.trim() == null || email.trim().length == 0) {
             alert('Email no ingresados');
             error_email.innerHTML = 'Email no valido';
             error_email.style.display = 'block';
             return false;
         } else {
             error_email.style.display = 'none';
         }

         switch (horas) {
             case '0':
                 horas = '08:00'
                 break;
             case '1':
                 horas = '08:30'
                 break;
             case '2':
                 horas = '09:00'
                 break;
             case '3':
                 horas = '09:30'
                 break;
             case '4':
                 horas = '10:00'
                 break;
             case '5':
                 horas = '10:30'
                 break;
             case '6':
                 horas = '11:00'
                 break;
             case '7':
                 horas = '11:30'
                 break;
             case '8':
                 horas = '12:00'
                 break;
             case '9':
                 horas = '12:30'
                 break;
         }

         switch (especialidad) {
            case '0':
                especialidad = 'Medicina General'
                break;
            case '1':
                especialidad = 'Traumatología'
                break;
            case '2':
                especialidad = 'Dermatología'
                break;
        }


         /* ====================VALIDAR FECHAS POR DD-MM-YYYY */
/*          $('#fechas').datepicker({
            showOtherMonths: true,
            changeMonth: true,
            changeYear: true,
            yearRange: "-50:+0",
            dateFormat: 'dd/mm/yy',
        });
        $.validate({
            modules: 'date'
          });
 */
          if (fechas.trim() == null || email.trim().length == 0) {
             alert('Fecha no ingresados');
             error_fechas.innerHTML = 'Fecha no valido';
             error_fechas.style.display = 'block';
             return false;
         } else {
             error_fechas.style.display = 'none';
         } 
         
         
         



         alert('Estimado(a) ' + nombre + ' ' + apellidos + ' , su hora para ' + especialidad + ' ha sido reservada para el dia ' + fechas + ' a las ' + horas + '. Ademas, se le enviò un mensaje a su correo ' + email + ' con el detalle de su cita. Gracias por preferirnos.');


         document.getElementById('rut').value = '';
         document.getElementById('nombre').value = '';
         document.getElementById('apellidos').value = '';
         document.getElementById('edad').value = '';
         document.getElementById('email').value = '';
         document.getElementById('fechas').value = '';
     });

 });
