// si quisieras extraer el color, que esta entre soundData-Habado-color
// soundData["habado"]["color"]

var datos=$('#guide-taxa [id]'); //Para extraer en el div de id="guide-taxa", todos los id
var avesData={};
var lastPlay="golondrina";


//para pasar solos los nombres a un array/object
for(var x=0;x<datos.length;x++){
  var nombres={};
  nombres[x]=datos[x].id;

tempSnd={};
tempSrc={};
canto={};

Object.defineProperty(canto, 'sound', {
    value: 1,
    writable: true
  });

tempSrc.src=['sounds/'+ nombres[x] +'.mp3'];

tempSnd= new Howl(tempSrc);
canto.sound=tempSnd;

avesData[nombres[x]]=canto;
}

$('a').click(function(){
 //Aqui se escoge el nombre(extraido del id) y se reproduce el sonido
  avesData[lastPlay].sound.stop(); 
 var name=$(this)[0].id;
  lastPlay=name;  
  avesData[name].sound.play();
  
}); 






//Forma antigua de hacerlo
//$('#moteado').click(function(){ soundData.moteado.sound.play(); }); 
//$('#moteado').click(function(){ soundData.moteado.sound.play(); }); 


