export interface Producto {
    idProducto: number;              
    nombreProducto: string;          
    descripcion?: string;            
    precio: number;                  
    stock: number;                   
    categoria?: string;              
    fechaCreacion?: Date;            
    fotoUrl?: string;
}