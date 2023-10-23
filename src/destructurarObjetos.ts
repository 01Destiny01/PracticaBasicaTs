//practica guardar valores en una constante para acceder al objeto de forma más directa
interface Cancion{
    titulo:string,
    autor:string,
    duracion:number,
  
  }
  interface Reproductor {
    minutoActual:number,
  estado:Boolean,
  cancion:Cancion,getCancion:() => string;
      
  }
  const reproductor:Reproductor = {
    minutoActual:3,
    estado:false,
    cancion:{
      titulo:'survival',
      autor:'Eminem',
      duracion:4
    },
      getCancion(){
        return  'La cancion : ' + this.cancion.titulo
  
      }
  
    
  }
  console.table(reproductor.cancion)
  
  const {minutoActual,estado} = reproductor
  
  console.table(minutoActual + ' '+ estado) 
  
   // lo mismo con arrays
   
 const dbz: string[] = ['Goku', 'Vegeta','Trunks'];

 const [g, v, T] = dbz;
console.log(g)
console.log('--------------------')
console.log(v)
console.log('--------------------')
console.log(T)
console.log('--------------------')
 
dbz.forEach(element => {
  console.log(element)
  
 });
  
  
  
  
  
  
  