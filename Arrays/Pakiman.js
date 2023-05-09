class Pakiman
  {
    constructor(n,v,a)
    {
        this.objeto = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.objeto.src=img[this.nombre];  
    }
    hablar(){
        alert(this.nombre);
    }
    mostrar(){
        
        document.body.appendChild(this.objeto);
        document.write("<strong" + this.nombre + "</strong><br/>");
        document.write("vida: " + this.vida + "<br/>");
        document.write("ataque: " + this.ataque + "<hr/>");
    }   

}
var cauchin = new Pakiman("cauchin",100,30); 
var pokacho=new Pakiman("pokacho",80,50)
var tocinauro = new Pakiman("Tocinauro",120,40);

pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();