function traerInformacion(){
    $.ajax({
        url:"http://localhost:8080/demoweb1-0.0.1-SNAPSHOT/cliente/lista",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            imprimirInformacion(respuesta);
        }
    });
}

function imprimirInformacion(items) {
    //var myTable = "<table>";
    //myTable += "<tr>";
    //myTable += "<th>Id</th>";
    //myTable += "<th>Nombre</th>";
    //myTable += "<th>Correo</th>";
    //myTable += "<th>Dirección</th>";
    //myTable += "</tr>";
    let myTable="";
    for(i=0 ; i < items.length; i++) {
        myTable += `<div class="col">
                    <div class="card"><div class="card-header">
                      <h5 class="card-title">${items[i].nombre}</h5>
                    </div>
                    <div class="card-body">
                       <p class="card-text">${items[i].correoelectronico}</p>
                       <p class="card-text">${items[i].direccion}</p>
                    </div>
                    <div class="card-footer">
                       <div class="btn-group" role="group>
                          <button type="button" class="btn btn-outline-primary" onclick='borrarElemento(${items[i].idcliente})'>Borrar</button>
                       </div>
                    </div>
                    </div>
                    </div>
        `;
        //myTable += "<td>"+items[i].idcliente+"</td>";
        //myTable += "<td>"+items[i].nombre+"</td>";
        //myTable += "<td>"+items[i].correoelectronico+"</td>";
        //myTable += "<td>"+items[i].direccion+"</td>";
        //myTable+="<td>" + "<button onclick=borrarElemento("+items[i].idcliente+")>Borrar</button>";
        //myTable += "</tr>";
    }
    //myTable += "</table>";
    $("#resultado").append(myTable);
}

function editarInformacion(idelemento) {
    let myData = {
        idcliente: $("#idcliente").val(),
        nombre: $("#nombre").val(),
        correoelectronico: $("#correoelectronico").val(),
        direccion: $("#direccion").val()
    };
    let dataToSent = JSON.stringify(myData);
    $.ajax({
      url:"http://localhost:8080/demoweb1-0.0.1-SNAPSHOT/cliente/"+idelemento,
      type:"PUT",
      data: dataToSent,
      contentType: "application/json",
      datatype:"JSON",
      success:function(respuesta){
            //Acá se puede validar la respuesta.
            $("#resultado").empty();
            $("#idcliente").val("");
            $("#nombre").val("");
            $("#correoelectronico").val("");
            $("#direccion").val("");
            traerInformacion();
            alert("Se ha actualizado")
      }
    });
}

function guardarInformacion() {
    let myData = {
        idcliente:$("#idcliente").val(),
        nombre:$("#nombre").val(),
        correoelectronico:$("#correoelectronico").val(),
        direccion:$("#direccion").val()
    };
    let dataToSent = JSON.stringify(myData);
    console.log(dataToSent);
    $.ajax({
      url:"http://localhost:8080/demoweb1-0.0.1-SNAPSHOT/cliente/save",
      type:"POST",
      data: dataToSent,
      contentType: "application/json",
      datatype:"JSON",
      success:function(respuesta){
            //Acá se puede validar la respuesta.
            $("#resultado").empty();
            $("#idcliente").val("");
            $("#nombre").val("");
            $("#correoelectronico").val("");
            $("#direccion").val("");
            traerInformacion();
            alert("nuevo elemento agregado");
      },
      error:function(error){
          console.log("Error $(error)")
      }
    });
}

function borrarElemento(idElemento) {
    let myData = {
        idcostume1: idElemento
    };
    let dataToSent = JSON.stringify(myData);
    $.ajax({
      url:"http://localhost:8080/demoweb1-0.0.1-SNAPSHOT/cliente/"+idelemento,
      type:"DELETE",
      data: dataToSent,
      contentType: "application/json",
      datatype:"JSON",
      success:function(respuesta){
            //Acá se puede validar la respuesta.
            $("#resultado").empty();
            traerInformacion();
            alert(dataToSent)
      }
    });
}