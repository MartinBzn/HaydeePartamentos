//----------------------------------------------------------------------------------------------------------

function mostrarInmueble(inmueble) {
    let arrayInmueble =[];
    let imagenes_inm = [];
    switch (inmueble){
        case "v1":
            arrayInmueble[0] = "Av. Callao 1034 - Recoleta - CABA";
            arrayInmueble[1] = "Excelente semipiso a contrafrente reciclado, cuatro dormitorios en suite, principal con hidromasaje, baño, ante baño, amplio vestidor, cocina comedor y comedor diario, caldera individual duo, vista abierta a pulmon de manzana. Cochera opcional no incluida en el valor de venta";
            for (var i=0;i<5;i++){
                imagenes_inm[i] = "img/Depto1/Depto1_" + (i+1) + ".jpg";
            }
            imagenes_inm[5] = "img/Depto1/Depto1_P.jpg";
            break;
        case "v2":
            arrayInmueble[0] = "Potosí 4300 - Parque Centenario - CABA";
            arrayInmueble[1] = "Muy luminoso 1 Ambiente. Cocina con horno y bajo mesada. Placard en habitación, espejado y con divisiones.";
            for (var i=0;i<5;i++){
                imagenes_inm[i] = "img/Depto3/Depto3_" + (i+1) + ".jpg";
            }
            imagenes_inm[5] = "img/Depto3/Depto3_P.jpg";                
            break;
        case "v3":
            arrayInmueble[0] = "Bartolomé Mitre 4431 - Caballito - Capital Federal";
            arrayInmueble[1] = "Departamento de 2 ambientes al frente con salida a balcón, dormitorio en suite y cochera. Ingreso por hall de recepción con placard y toilette. Living comedor, cocina semi integrada con bajo mesada, alacena y desayunador. Dormitorio en suite. Baño completo con luz y ventilación natural. Vestidor. Cochera descubierta con media sombra en planta baja. Edificio cuenta laundry y 3 terrrazas."
            for (var i=0;i<5;i++){
                imagenes_inm[i] = "img/Depto5/Depto5_" + (i+1) + ".jpg";
            }
            imagenes_inm[5] = "img/Depto5/Depto5_P.jpg";                
            break;
        case "a1":
            arrayInmueble[0] = "Av. Triunvirato 3100 - Villa Ortúzar - CABA";
            arrayInmueble[1] = "Excelente 2 ambientes reciclado, dormitorio en suite, baño, cocina , caldera individual, vista abierta a pulmon de manzana.";
            for (var i=0;i<5;i++){
                imagenes_inm[i] = "img/Depto2/Depto2_" + (i+1) + ".jpg";
            }
            imagenes_inm[5] = "img/Depto2/Depto2_P.jpg";
            break;
        case "a2":
            arrayInmueble[0] = "Salguero 2750 - Palermo Chico - CABA";
            arrayInmueble[1] = "Cuenta con un living comedor con vista al río y orientación norte con salida a balcón, 3 dormitorios, uno de ellos en suite y con vestidor, un baño completo para los otros dos dormitorios, cocina con espacio para comedor diario, lavadero y toilette. También cuenta con doble circulación.";
            for (var i=0;i<5;i++){
                imagenes_inm[i] = "img/Depto4/Depto4_" + (i+1) + ".jpg";
            }
            imagenes_inm[5] = "img/Depto4/Depto4_P.jpg";                
           break;
        case "a3":
            arrayInmueble[0] = "Ramsay 1900 18° - Belgrano - CABA";
            arrayInmueble[1] = "Torres Alcorta. Excelente departamento piso alto recién reciclado y luminoso a nuevo en Torres de Ramsay, totalmente externo, con dos balcones terraza deck y living de exteriores con vistas panorámicas al río. Cuenta con living-comedor, toilette, doble circulación, amplia cocina totalmente equipada, comedor diario con vistas al río, lavadero y habitación de servicio."
            for (var i=0;i<5;i++){
                imagenes_inm[i] = "img/Depto6/Depto6_" + (i+1) + ".jpg";
            }
            imagenes_inm[5] = "img/Depto6/Depto6_P.jpg";                
            break;
    }
    arrayInmueble[2] = imagenes_inm;
    return arrayInmueble;
}

//----------------------------------------------------------------------------------------------------------

function llenarInputradio(){
    let x='';
    for(let i=2;i<=6;i++){
        x = x + '<input type="radio" class ="selector" id="irImagen' + i +'" name="imagenes">';
    }
    return x;
}

//----------------------------------------------------------------------------------------------------------

function llenarDiv(imagen){
    let divSlide_Img=""
    let indiceImagenMenor="";
    let indiceImagenMayor="";
    for(var i=1;i<=6;i++){
        if(i===1){
            indiceImagenMenor='6';
        }else{
            indiceImagenMenor=i-1;
        }
        if(i===6){
            indiceImagenMayor='1';
        }else{
            indiceImagenMayor=i+1;
        }
        divSlide_Img = divSlide_Img +
                        '<div class="slide_img" id="imagen'+ (i) +'">'+
                            '<img src='+imagen[i-1]+'>'+
                            '<label class="ant" for="irImagen'+ indiceImagenMenor + '"><span><i class="fas fa-arrow-circle-left"></i></span></label>'+
                            '<label class="sig" for="irImagen'+ indiceImagenMayor +'"><span><i class="fas fa-arrow-circle-right"></i></span></label>'+
                        '</div>';
        
    }
    return divSlide_Img;
}

//----------------------------------------------------------------------------------------------------------

function llenarLabel(imagen){
    let labelDot = "";
    for(var i=1;i<=6;i++){
        labelDot = labelDot +'<label for="irImagen'+i+'" class="selector2" id="dot'+i+'"><img src='+imagen[i-1]+' alt=""></label>';
    }
    return labelDot;
}

//----------------------------------------------------------------------------------------------------------
const DIRECCION = document.location.search;
const INMUEBLE = DIRECCION[DIRECCION.length-2] + DIRECCION[DIRECCION.length-1];
const arrayInmueble = mostrarInmueble(INMUEBLE);
const inputRadio = llenarInputradio();
const divSlide_Img = llenarDiv(arrayInmueble[2]);
const labelDot = llenarLabel(arrayInmueble[2]);
const URLANT = document.referrer;

var vistaInmueble = document.getElementById("vistainmueble");

vistaInmueble.innerHTML =
    '<h3>' + arrayInmueble [0] +'</h3>' +
    '<p class="descripcion">'+ arrayInmueble[1] + '</p>' +
    '<div class="contenedorSlider">' +
        	'<div id="pantalla">' +
                '<input type="radio" class ="selector" id="irImagen1" name="imagenes" checked>' +
                inputRadio + divSlide_Img +          	
            '</div>' +
            '<div id="nav_slide">'+ labelDot +'</div>'+
    '</div>'+
    '<p class="volver"><a href='+ URLANT +'><i class="fas fa-arrow-circle-left"></i>Volver</a></p>';