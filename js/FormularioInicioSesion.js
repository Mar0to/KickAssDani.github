document.querySelector('#btnIngresar').addEventListener('click', guardarCita)


function guardarCita(){
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var telefono = document.getElementById("telefono").value;
    var cedula = document.getElementById("cedula").value;
    var fechaCita = document.getElementById("fechaCita").value;
    var tipoCita = document.getElementById("tipoCita").value;
    var horaCita = document.getElementById("horaCita").value;
    var usuario = document.getElementById("usuario").value;
    
    if(usuario != "" && nombre != "" && cedula != "" && apellidos != "" &&
    fechaCita != "" && telefono != "" && tipoCita != "" && horaCita != ""){
        addFriendToSystem(nombre,apellidos, telefono,cedula, fechaCita, tipoCita, horaCita, usuario);
        drawnTable();
    }
    
  }
  
  function drawnTable(){
    //Crear una tabla que se vaya dibujando mediante se agregue información
    var list = getFriend(),
    tbody = document.querySelector('#tablaAmigos tbody');
  
  
    tbody.innerHTML = '';
  
    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i),
        nameCell = row.insertCell(0),
        lastnameCell = row.insertCell(1),
        telefonoCell = row.insertCell(2),
        cedulaCell = row.insertCell(3),
        fechaCita = row.insertCell(4),
        tipoCita = row.insertCell(5),
        horaCita = row.insertCell(6),
        usuario = row.insertCell(7);
       
  
        nameCell.innerHTML = list[i].nombre;
        lastnameCell.innerHTML = list[i].apellidos;
        telefonoCell.innerHTML = list[i].telefono;
        cedulaCell.innerHTML = list[i].cedula;
        fechaCita.innerHTML = list[i].fechaCita;
        tipoCita.innerHTML = list[i].tipoCita;
        horaCita.innerHTML = list[i].horaCita;
        usuario.innerHTML = list[i].usuario;
  
        tbody.appendChild(row);
    }
  }


