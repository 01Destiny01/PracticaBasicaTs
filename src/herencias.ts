 //practica de creacion de interfaces con interfaces dentro y llamando a metodos de la misma
interface SuperHeroe{
    nombre:String,
    edad:number;
    direccion:Direccion, mostrarDireccion:() => string;
    
    
    }
    interface Direccion{
      calle:String,
      pais:String,
      ciudad:String;
     
    }
    const heroe:SuperHeroe = {
    nombre:'Hulk',
    edad :28,
    
    direccion: { 
      calle:'Main St',
      pais:'USA',
      ciudad:'NY'
    },

    mostrarDireccion(){
       return  'El heroe : '  + this.nombre +  ', ' +'de ' + this.edad + ' vive en ' + this.direccion.ciudad + ' ('  + this.direccion.pais + ')';}
    }
    
    console.table(heroe.nombre)
    console.table(heroe.edad)
    console.table(heroe.direccion.pais)
    
    