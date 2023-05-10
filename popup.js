function encode() {
    var originalText = document.getElementById("original-text").value;
    var encodedText = btoa(originalText);
    document.getElementById("encoded-text").value = encodedText;
  }
  
  function decode() {
    var base64Text = document.getElementById("base64-text").value;
    var decodedText = atob(base64Text);
    document.getElementById("decoded-text").value = decodedText;
  }

  document.addEventListener('DOMContentLoaded', function() {
    var b1 = document.getElementById("encode-button");
  if(b1){
    b1.addEventListener("click", encode);
  }else{
    console.log("No hay boton encode-button");
  }

  var b2 = document.getElementById("decode-button");
  if(b2){
    b2.addEventListener("click", decode);
  }
  });
  
  
  