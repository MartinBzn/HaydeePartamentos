function cargarOperacion(opcion){
    let arrayValores=[];
    if(opcion == 1){
        document.title = "Haydee Partamentos - Ventas";
        document.getElementById("subtitulo").innerHTML="- Propiedades en Venta -"
        arrayValores[0]= ["/img/Depto1/Depto1_1.jpg","Venta","Av. Callao al 1100", "USD 500.000", "7 ambientes", '<a href="inmueble.html">Ver inmueble...</a>', "v1"] 
        arrayValores[1]= ["/img/Depto3/Depto3_1.jpg","Venta","Potosí al 4300", "USD 96.876", "1 ambiente", 'Ver Inmueble', "v2"] 
        arrayValores[2]= ["/img/Depto5/Depto5_1.jpg","Venta","Bartolomé Mitre al 4300", "USD 99.000", "2 ambientes", 'Ver Inmueble', "v3"] 
    }else if (opcion == 2){
        document.title = "Haydee Partamentos - Alquiler";
        document.getElementById("subtitulo").innerHTML="- Propiedades en Alquiler -";
        arrayValores[0]= ["/img/Depto2/Depto2_1.jpg","Alquiler","Av. Triunvirato al 3100", "$ 25.000", "2 ambientes", 'Ver inmueble...', "a1"] 
        arrayValores[1]= ["/img/Depto4/Depto4_1.jpg","Alquiler","Salguero al 2700", "USD 3.000", "4 ambientes", 'Ver Inmueble', "a2"] 
        arrayValores[2]= ["/img/Depto6/Depto6_1.jpg","Alquiler","Ramsay al 1900", "USD 3.750", "3 ambientes", 'Ver Inmueble', "a3"]   
    }
    return arrayValores;
}

var arrayValores = cargarOperacion(sessionStorage.opcion);
var insertarHTML="";
for(var i=0;i<arrayValores.length;i++){
    
    insertarHTML = insertarHTML + '<div class="tarjeta" id="tarjeta'+(i+1)+'"><div class="imagentarjeta"> '+
                    '<img src=' + arrayValores[i][0] +' class="img" alt="Portada"></div>'+
                    '<div class="caracteristicas">'+'<p class="operacion">' + arrayValores[i][1] +'</p>'+
                    '<p class="direccion">' + arrayValores[i][2] +'</p>'+
                    '<p class="importe">' + arrayValores[i][3] +' </p>'+
                    '<p class="ambientes">' + arrayValores[i][4] +'</p>'+
                    '<p class="ver">' + arrayValores[i][5] +'</p>'+
                    '<span class="id_inmueble">' + arrayValores[i][6] +'</span></div></div>';
}
document.getElementById("Inmuebles").innerHTML=insertarHTML;