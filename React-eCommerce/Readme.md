# Proyecto E-commerce de Pino Luis, Comisión 31165 React JS Coder House

[Vulkan Company Proyect](https://proyect-pino-vulkancsgo.netlify.app)

## Objetivo de la cursada

- **Crear un carrito de compras online**
- **Importar los productos extraidos de la DataBase de Firestore**
- **Crear un componente Item que funcionará como card de cada uno de nuestros productos almacenados en la base de datos.**
- **Crear un componente ItemListContainer donde recorre la base de datos de nuestros productos almacenados y lo muestra en pantalla.**
- **Crear un componente ListDetailContainer que al hacer click en algún producto filtre por su id y nos muestre los productos que tengan esa categoria. Ejemplo: "Awp".**
- **Crear un componente ItemDetail que al hacer click en Ver Detalle, muestre el detalle del producto con los campos generados en la base de datos. Además, deberá mostrar la posiblididad de aumentar o reducir la cantidad deseada del producto gracias al componente ItemCount.**
- **CartContext: Contexto utilizado para manipular a nivel global el carrito de compras.**
- **Carrito de compras(Icono): En la parte superior derecha del Navbar podemos ver el ícono de un carrito que permanecerá sin número cantidad hasta que se agregue algún producto al carrito. Clickeando en él se mostrará que no hay productos.**
- **Carrito de compra(Componente): Es el encargado de mostrar la misma información que el Cary y además otorgar la posibilidad al cliente de que complete todos los datos correspondientes a la facturación**





## Libreria de React Js utilizadas

- **Proyecto realizado en Vite JS.**
- **React router dom (BrowseRouter,Routes, Route, navigate, link).** Estas librerias fueron utilizadas para posibilitar la navegación en mi proyecto. 
- **BrowserRouter** tiene la particularidad de generar un contexto el cual me permite envolver los componentes que quiera y así poder navegar.
- **Routes:** Será el que engloba las rutas y **Route** será la definición que se utiliza para especificar la ruta a la cual se quiere dirigir.
- **Link** nos permite dar navegación hacía esa ruta que queremos ir.
- **UseState:** Es una función que crea internamente una variable donde podremos almacenar el estado de nuestro componente. Acepta un valor inicial para esa variable y devuelve un array con dos elementos, el valor de la variable y la función para modificarla.
- **useEffect:** se trata sobre sincronizar el estado interno de un componente con algún estado externo, por ejemplo obtener datos desde una api o modificar algo en el DOM.


## Librerias Externas

- **React FontAwasome:** Iconos.
- **Sass:** Compilador de css.
- **SweetAlert:** Alerta para mostrar el id generado por la compra realizada.
- **Firebase:** Base de Datos de la que se extrajeron los datos de los productos. con sus campos y los usuarios para el login.
- **Se instaló React-hook-form pero no se utilizó.**
- **Se instaló SweetAlert2 pero no se utilizó.**

## Página utilizada para el renderizado 3D.
- [**SKETCHFAB**](https://sketchfab.com/csgoitems.pro)
- **Documentación utilizada para lograr insertar el objeto en mi proyecto : [PlurasLight](https://www.pluralsight.com/guides/return-html-elements-in-json)**


