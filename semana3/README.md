1. Ejercicio 1: Filtrado básico

Dado el arreglo:
const usuarios = [
  { nombre: "Ana", edad: 25, activo: true },
  { nombre: "Luis", edad: 17, activo: true },
  { nombre: "María", edad: 30, activo: false }
];


Obtén un nuevo arreglo con solo los usuarios que sean mayores de edad (18+) Y estén activos.
---

Ejercicio 2: Transformación

Dado:
const productos = [
  { nombre: "Laptop", precio: 15000, categoria: "Tecnología" },
  { nombre: "Silla", precio: 2500, categoria: "Muebles" }
];


Genera un nuevo arreglo donde cada producto tenga un campo adicional precioConIVA (precio * 1.16). El arreglo original NO debe modificarse.

---
Ejercicio 3: Agrupación
Dado:
const ventas = [
  { vendedor: "Ana", monto: 500 },
  { vendedor: "Luis", monto: 300 },
  { vendedor: "Ana", monto: 200 },
  { vendedor: "Luis", monto: 400 }
];


Genera un objeto donde cada key sea el nombre del vendedor y el valor sea el total de sus ventas:
{ Ana: 700, Luis: 700 }


---
Ejercicio 4: Búsqueda con prioridad

Dado:
const tareas = [
  { id: 1, titulo: "Fix bug", prioridad: "alta", completada: false },
  { id: 2, titulo: "Tests", prioridad: "media", completada: false },
  { id: 3, titulo: "Deploy", prioridad: "alta", completada: true },
  { id: 4, titulo: "Docs", prioridad: "baja", completada: false }
];


Encuentra la primera tarea que esté:
NO completada
Prioridad "alta"

Si no hay, busca prioridad "media". Si no hay, prioridad "baja". Si no hay nada, retorna null.
---

Ejercicio 5: Validación de estructura

Dado:
const pedidos = [
  { cliente: "Juan", items: [{ producto: "A", cantidad: 2 }, { producto: "B", cantidad: 0 }] },
  { cliente: "Ana", items: [{ producto: "C", cantidad: 1 }] },
  { cliente: "Luis", items: [] }
];


Escribe una función que retorne true si TODOS los pedidos tienen al menos un item Y ningún item tiene cantidad 0 o negativa. Retorna false en cualquier otro caso.
