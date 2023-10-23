class Humano{

  constructor(
  public nombre:string,
  public estatura:number
  ){
  
  }
  
  }


class Guerrero extends Humano{
constructor(
  public nombreGuerrero:string,
  public habilidadEspecial:string
)
{
  super("Cesar",2);
}
}
let guerrero = new Guerrero('Atreus VII','derumbe del cielos') 
console.log(guerrero)

