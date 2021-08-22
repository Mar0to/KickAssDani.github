/* 1: admin,
   2: cliente
*/

var FrienList = [];

function obtenerListausuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));

    if(listaUsuarios == null){
        listaUsuarios = [
            //id, nombre, apellido, correo, nac, rol, cont, fecha
            ['1','Eduardo','Chaves','chaMart','123456','1998-08-23','1'],
            ['2','Juan','Brenes','brenesJu','123456','2000-04-12','2']
        ]
    }

    return listaUsuarios;
}

function validarCredenciales(pCorreo, pContrasena){
    var listaUsuarios = obtenerListausuarios();
    var bAcceso = false;

    for(var i=0; i< listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i][3] && pContrasena == listaUsuarios[i][4]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ''+ listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo',listaUsuarios[i][6]);
        }
    }
    return bAcceso;
}

function addFriendToSystem(VLnombre, VLapellidos, Vtelefono, vCedula,VfechaCita ,VtipoCita, VhoraCita, Vusuario){
    //construir un objeto amigo
   
    var newFriend = {
        nombre: VLnombre,
        apellidos: VLapellidos,
        telefono: Vtelefono,
        cedula: vCedula,
        fechaCita: VfechaCita,
        tipoCita: VtipoCita,
        horaCita: VhoraCita,
        usuario: Vusuario
    }; //Notacion JSON por las llaves

    console.log(newFriend);
    FrienList.push(newFriend);
    LocalStorageFriend(FrienList);
}


function getFriend(){
    var list = localStorage.getItem('localFriendList');
    if(list == null)
    {
        FrienList = [];
    }else{
        FrienList = JSON.parse(list);
        return FrienList;
    }
}


function LocalStorageFriend(GBlist){
    localStorage.setItem('localFriendList', JSON.stringify(GBlist));
}