document.getElementById ("headercabecera").innerHTML= `
<div class="ContenedorPpal">
            <div class="Cabecera">
                <img id="LogoPrincipal" src="img/logo_ppal.png" alt="Logo">
                <div class="TituloLogo">
                    <h1>Haydee Partamentos.</h1>
                    <h4>Negocios Inmobiliarios</h4>
                </div>
            </div>
            <div class="menu">
                <input type="checkbox" id="checkmenu">
                <label class="iconohamburguesa" for="checkmenu"><i class="fas fa-bars"></i></label>
                <label class="iconocruz" for="checkmenu"><i class="fas fa-times"></i></label>
                <nav class="MenuPpal">   
                    <ul class="ul_menu">
                        <li class="li_menu" id="home"><a href="index.html">Home</a></li>
                        <li class="li_menu" id="venta" onClick="elegirOperacion(1)")><a href="Operacion.html">Venta</a></li>
                        <li class="li_menu" id="alquiler" onClick="elegirOperacion(2)")><a href="Operacion.html">Alquiler</a></li>
                        <li class="li_menu" id="quienessomos"><a href="quienessomos.html">Quienes Somos</a></li>
                        <li class="li_menu" id="contacto"><a href="contacto.html">Contacto</a></li>
                    </ul>
                </nav>    
            </div>
        </div>
`

function elegirOperacion (opcion){
    if(opcion == 1){
        sessionStorage.opcion ="1";
    }else{
        sessionStorage.opcion = "2"
    }
}