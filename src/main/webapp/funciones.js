function traerInformacion(){
    $.ajax({
        url:"https://g792ddec211d302-ubqaneatdpd43yh2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/pruebarest/pruebacostume/",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            imprimirInformacion(respuesta.items);
        }
    });
}

function imprimirInformacion(items) {
    var myTable = "<table>";
    myTable += "<tr>";
    myTable += "<th>Id</th>";
    myTable += "<th>name</th>";
    myTable += "<th>brand</th>";
    myTable += "<th>year</th>";
    myTable += "</tr>";
    for(i=0 ; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>"+items[i].idcostume1+"</td>";
        myTable += "<td>"+items[i].name1+"</td>";
        myTable += "<td>"+items[i].brand+"</td>";
        myTable += "<td>"+items[i].year1+"</td>";
        myTable+="<td>" + "<button onclick=borrarElemento("+items[i].idcostume1+")>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion() {
    let myData = {
        idcostume1: $("#idcostume1").val(),
        name1: $("#name1").val(),
        brand: $("#brand").val(),
        year1: $("#year1").val(),
        descripcion : $("#descripcion").val(),
        idcatergoria : $("#idCatergoria").val()
    };
    let dataToSent = JSON.stringify(myData);
    console.log(dataToSent);
    $.ajax({
      url:"https://g792ddec211d302-ubqaneatdpd43yh2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/pruebarest/pruebacostume/",
      type:"POST",
      data: dataToSent,
      contentType: "application/json",
      datatype:"JSON",
      success:function(respuesta){
            //Acá se puede validar la respuesta.
            $("#resultado").empty();
            $("#idcostume1").val("");
            $("#name1").val("");
            $("#brand").val("");
            $("#year1").val("");
            $("#descripcion").val("");
            $("#idCatergoria").val("");
            traerInformacion();
            alert("nuevo elemento agregado")
      }
    });
}

function editarInformacion() {
    let myData = {
        idcostume1: $("#idcostume1").val(),
        name1: $("#name1").val(),
        brand: $("#brand").val(),
        year1: $("#year1").val(),
        descripcion : $("#descripcion").val(),
        idcatergoria : $("#idcatergoria").val()
    };
    let dataToSent = JSON.stringify(myData);
    $.ajax({
      url:"https://g792ddec211d302-ubqaneatdpd43yh2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/pruebarest/pruebacostume/",
      type:"PUT",
      data: dataToSent,
      contentType: "application/json",
      datatype:"JSON",
      success:function(respuesta){
            //Acá se puede validar la respuesta.
            $("#div1").empty();
            $("#idcostume1").val("");
            $("#name1").val("");
            $("#brand").val("");
            $("#year1").val("");
            $("#descripcion").val("");
            $("#idcatergoria").val("");
            traerInformacion();
            alert("Se ha actualizado")
      }
    });

}

function borrarElemento(idElemento) {
    let myData = {
        idcostume1: idElemento
    };
    let dataToSent = JSON.stringify(myData);
    $.ajax({
      url:"https://g792ddec211d302-ubqaneatdpd43yh2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/pruebarest/pruebacostume/",
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