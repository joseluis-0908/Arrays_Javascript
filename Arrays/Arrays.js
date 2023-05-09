var img = [];
img["Cauchin"] = ("./Imagenes/vaca.gif");
img["Pokacho"] = ("./Imagenes/pollo.gif");
img["Tocinauro"] = ("./Imagenes/cerdo.png");

var coleccion = [];
coleccion.push(new Pakiman("cauchin",100,30));
coleccion.push(new Pakiman("pokacho",80,50));
coleccion.push(new Pakiman("Tocinauro",120,40));

for(var jose of coleccion){
   jose.mostrar();
} 

for (var x in coleccion [0]){
    console.log(x)
}
