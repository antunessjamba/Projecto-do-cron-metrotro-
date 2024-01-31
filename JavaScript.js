var display=document.getElementById('display');
var minutos=document.getElementById('minutos');

var segundos=document.getElementById('segundos');

var comecar=document.getElementById('comecar');

var cronometroseg;
var minutoactual;
var segundoactual;
var interval;



for (var i = 0; i <= 60; i++){
  
  minutos.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

for (var i = 0; i <= 60; i++){
  
  segundos.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

comecar.addEventListener('click',function () {
  minutoactual= minutos.value;
  segundoactual= segundos.value;
  
  display.childNodes[1].innerHTML= minutoactual + ":" + segundoactual
  
  
  interval = setInterval(function() {
    
    segundoactual--;
    if (segundoactual<=0) {
      
      if ( minutoactual>0) {
        
        minutoactual--;
        segundoactual=59; 
        
      } else {
        alert("fim da contagem")
        document.getElementById('musica').play();
        
        clearInterval(interval);
      } 
        
      
    }
    
      display.childNodes[1].innerHTML= minutoactual + ":" + segundoactual
  
  },1000)
})
