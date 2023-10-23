import { Producto, cproductoConImpuesto } from "./destructurarArrays";


const productos:Producto[] = [
{
nombre:'ASUS F15',
precio:1200


},
{
nombre:'chrome book',
precio:200
}
];
const valores = cproductoConImpuesto(productos)
console.table(valores)