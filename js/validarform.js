function validarCampos() {
  
  var nombre = document.getElementById("inpNom").value;
  var mail=document.getElementById("mail").value;
  var cons=document.getElementById("cons").value;
  var tel=document.getElementById("tel").value;
  var arrobaok, puntook, malMail = false;
  if (nombre === "" || mail === "" || cons === ""){
    alert("Falta completar alguno de los datos obligatorios");
    return false;
  }
  else if (isNaN(tel) && tel != ""){
    alert("El numero de telefono no esta cargado correctamente.");
    return false; 
  }
  else{
    if (/^\w+([\.-]?\w+)*$/.test(mail[0])){
      var i;
      var j;
      for(i=1;i<mail.length;i++){
        if (mail[i] === "@"){
          arrobaok=true;
          j=i;
          i=mail.length;
        }
      }
      if (arrobaok){
        if (/^\w+([\.-]?\w+)*$/.test(mail[j+1])){
          for(i=j+2;i<mail.length;i++){
            if(mail[i]==="."){
              puntook=true;
              i=mail.length;
            }
          }
          if(!puntook){
            malMail=true;
          }
        } else {
          malMail=true;
        }  
      }else{
        malMail=true;
      }
    }else{
      malMail=true;
    }
    if (malMail){
      alert("La direccion de mail no es una direccion valida.");
      return false;
    } 
  }
}