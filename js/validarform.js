function validarCampos() {
  
  var nombre = document.getElementById("inpNom").value;
  var mail=document.getElementById("mail").value;
  var cons=document.getElementById("cons").value;
  var tel=document.getElementById("tel").value;
  var arrobaok, puntook, malMail = false;
  if (nombre === "" || mail === "" || cons === ""){
    alert("Falta completar alguno de los datos obligatorios");
    if(nombre === ""){
      document.formulario.Nombre.focus(); 
    }else{
      if(mail === ""){
        document.formulario.Mail.focus(); 
      }else{
        if(cons === ""){
          document.formulario.Consulta.focus(); 
        }
      }
    }
    return false;
  }else{
    if (isNaN(tel) && tel != ""){
      alert("El numero de telefono no esta cargado correctamente.");
      document.formulario.Telefono.setFocus();
      return false; 
    }else{
      if ((mail[0].toUpperCase()>='A' && mail[0].toUpperCase()<='Z') || (mail[0]<='9' && mail[0]>='1')){
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
          if ((mail[j+1].toUpperCase()>='A' && mail[j+1].toUpperCase()<='Z') || (mail[j+1]<='9' && mail[j+1]>='1')){
            for(i=j+2;i<mail.length;i++){
              if(mail[i]==="."){
                puntook=true;
                i=mail.length;
              }
            }
            if(!puntook){
              malMail=true;
            }
          }else{
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
        document.formulario.Mail.focus();
        return false;
      } 
    }
  }
  alert("Gracias por contactarse con nosotros. En breve estaremos comunicándonos.")
  return true;

}