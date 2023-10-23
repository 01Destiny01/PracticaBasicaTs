//Destructuracion de informacion en arrays

  export interface Producto{
    nombre:string,
    precio:number
    
    }
    const ordenador:Producto = {
    nombre:'Thinkpad i5',
    precio:500
    }
     const ordenador2:Producto = {
      nombre:'Ideal pad',
      precio:600
      } 
    
     
    
    
      export  function cproductoConImpuesto(productos:Producto[]):void{
      
    
    productos.forEach(({nombre,precio})=> {
      
    precio += precio*0.21 
      console.table('[Portatil] : ' + "\n"  +nombre +   "\n"  +' [precio]:' + precio )
    })
    
    }
    const productos =[ordenador,ordenador2];
    cproductoConImpuesto(productos)
    