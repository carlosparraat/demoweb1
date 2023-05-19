function registro(){
var elemento={
  idcliente:$("#idcliente").val(),
  nombre:$("#nombre").val(),
  correoelectronico:$("#correoelectronico").val(),
  direccion:$("#direccion").val()
}
console.log(elemento);
//var dataToSend=JSON.stringify(elemento);
//console.log(dataTosend);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:JSON.stringify(elemento),
      url:"http://localhost:8080/demoweb1-0.0.1-SNAPSHOT/cliente/save",
      type:'POST',
      contentType:'application/json; charset=UTF-8',
      success:function(response) {
        console.log(response);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert(textStatus);
        alert(errorThrown);
      }
});

}

function obtenerItems(){
  $.ajax({
      dataType: 'json',
      url:"http://localhost:8080/demoweb1-0.0.1-SNAPSHOT/cliente/lista",
      type:'GET',
      
      success:function(response) {
       console.log(response);
        var misItems=response;

        for(i=0;i<misItems.length;i++){
         
          $("#miResultado").append("<tr>");
          $("#miResultado").append("<td>"+misItems[i].idcliente+"</td>");
          $("#miResultado").append("<td>"+misItems[i].nombre+"</td>");
          $("#miResultado").append("<td>"+misItems[i].correoelectronico+"</td>");
          $("#miResultado").append("<td>"+misItems[i].direccion+"</td>");
          $("#miResultado").append('<td><button onclick="borrar('+misItems[i].idcliente+')">Borrar</button></td>');
          $("#miResultado").append('<td><button onclick="obtenerItemEspecifico('+misItems[i].id+')">Cargar</button></td>');
          $("#miResultado").append("</tr>");

        }

      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}


function borrar(idElemento){
var elemento={
  id:idElemento
};
var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType:'json',
      data:dataToSend,
      url:"http://localhost:8080/demoweb1-0.0.1-SNAPSHOT/cliente/",
      type:'DELETE',
      contentType:'application/json',
      success:function(response) {
        console.log(response);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });
}


function obtenerItemEspecifico(idItem){
  $.ajax({
      dataType: 'json',
      url:"http://localhost:8080/demoweb1-0.0.1-SNAPSHOT/cliente/"+idItem,
      type:'GET',
      success:function(response) {
        console.log(response);
        var item=response.items[0];

        $("#idcliente").val(item.id);
        $("#nombre").val(item.name);
        $("#correoelectronico").val(item.description);
        $("#direccion").val(item.price);



      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

function actualizar(){
var elemento={
  id:$("#idcliente").val(),
  name:$("#nombre").val(),
  description:$("#correoelectronico").val(),
  price:$("#direccion").val()
  }


var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend,
      contentType:'application/json',
      url:"http://localhost:8080/demoweb1-0.0.1-SNAPSHOT/cliente/",
      type:'PUT',
      
      success:function(response) {
        console.log(response);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}


