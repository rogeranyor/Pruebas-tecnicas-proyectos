# 02 - Desarrollo Full Stack de Bazar

Debes crear una aplicación que consta de **3 componentes principales**:

- [x] Una caja de búsqueda
- [x] La lista de resultados
- [x] Descripción del detalle del producto

La aplicación debe constar de servidor y cliente. El servidor debe exponer un API RESTful y el cliente consumirlo.

## Desafíos adicionales

**¿Quieres ir más allá?** Estos son algunos desafíos adicionales que puedes intentar:

- [x] Implementa la funcionalidad de carrito de la compra.
- [x] Haz que el diseño sea responsive.
- [x] Integra la paginación tanto en la API como en la web.

![image](https://github.com/rogeranyor/Pruebas-tecnicas-proyectos/assets/64661531/1ab0485c-e723-4e51-bb5c-250ebf13f25d)
![image](https://github.com/rogeranyor/Pruebas-tecnicas-proyectos/assets/64661531/2b630201-3714-4914-987b-27660964bdab)
![image](https://github.com/rogeranyor/Pruebas-tecnicas-proyectos/assets/64661531/1013a72d-fade-47ea-bad8-161d4ef1b712)
![image](https://github.com/rogeranyor/Pruebas-tecnicas-proyectos/assets/64661531/040c80b8-12e8-4201-a12b-a5dda6aa7940)

## Mobile

![image]()

<img src="https://github.com/rogeranyor/Pruebas-tecnicas-proyectos/assets/64661531/2d6193b6-7295-41f1-bcc5-08cafa792b47" width="290" height ="627">
<img src="https://github.com/rogeranyor/Pruebas-tecnicas-proyectos/assets/64661531/40c1a7f1-919e-47a3-b933-31c4ee1fcca6" width="290" height ="627">
<img src="https://github.com/rogeranyor/Pruebas-tecnicas-proyectos/assets/64661531/2765d718-43b4-4cc1-b364-f69996692aa9" width="290" height ="627">
<img src="https://github.com/rogeranyor/Pruebas-tecnicas-proyectos/assets/64661531/23169b42-f855-4a61-be37-1acda77ff42f" width="290" height ="627">


## Contexto

Somos un bazar con todo tipo de productos. Queremos crear nuestra app web. Por ahora **nuestro mercado va a ser el móvil**.

Esta primera versión los usuarios podrán buscar el nombre del producto, le mostraremos una lista de productos y podrán hacer clic en cada uno para ver el detalle. 

Ten en cuenta:
- No sabemos si el framework que utilicemos ahora será el definitivo, pero querremos reutilizar el máximo de código posible.

- La aplicación debe ser fácil de usar y **agradable a la vista**. No importa si copias el diseño o usas un catálogo de componentes.

- **Es MUY importante el SEO de la aplicación**. Así que el robot de Google debe poder ver bien nuestra página, navegarla sin problemas y el rendimiento debe ser el adecuado.

- Queremos también que los usuarios puedan compartir los productos en redes sociales.

## Requisitos

### Funcionalidad

1. **Crea las 3 páginas**: Inicio con caja de búsqueda, resultados de búsqueda y detalle.

2. **Las rutas de las páginas serán**:
  - Home con caja de búsqueda
    - Ruta: `/`
    - Descripción: Simplemente muestra una caja de búsqueda para poder hacer la búsqueda de productos. Al realizar la búsqueda navegar a la vista de Resultados de búsqueda.
  
  - Resultados de búsqueda:
    - Ruta: `/items?search=`, por ejemplo: `/items/?search=laptop`
    - Descripción: Muestra justo debajo de la caja de búsqueda, el número de resultados y también los resultados que muestra para cada categoría. En cada tarjeta de los resultados muestra: título, descripción, precio, categoría, imagen y puntuación.

  - Detalle de producto: "/items/:id"
    - Ruta: `/items/:id`
    - Descripción: Muestra la descripción completa del producto, incluyendo todos los detalles que tengas: precio, descripción, marca, stock, categoría, etc. Muestra todas las imágenes. También un botón para poder realizar la compra (aunque no funcione)

3. **API**: Debes crear dos endpoints, debes basarte en el contenido del archivo `products.json` que tienes en este repositorio pero no tienes por qué seguir ese esquema. Los endpoints a crear son:
  - `/api/items?q=:query` donde `:query` es la búsqueda que hace el usuario. Debe devolver un JSON con los datos a mostrar en la lista de items.
  - `/api/items/:id`, donde `:id` es el id del producto seleccionado. Debe devolver un JSON con los datos del item seleccionado.

4. **Despliegue**: La aplicación debe estar desplegada en algún servicio de hosting gratuito (Netlify, Vercel, Firebase, etc) y debe ser accesible a través de una URL pública. **Indica la URL al hacer la Pull Request.**

5. **Test**: La aplicación debe tener AL MENOS un test. Haz el test que consideres más importante para tu aplicación.

## Consejos sobre el código

1. **Estructura del código**: El código debe estar bien organizado y fácil de leer.

2. **Semántica HTML**: El HTML debe ser semántico y accesible.

3. **Pensando en equipo**: Prepara tu proyecto pensando que cualquier persona de tu equipo puede tener que trabajar en él en el futuro. (scripts en el package.json, mínima documentación en el README, comentarios en el código si es necesario, etc)

4. **Formatea tu código**: Asegúrate de que tu código está formateado de forma consistente. Puedes usar Prettier o cualquier otra herramienta que te guste.

5. **Preparado para producción**: Asegúrate de que tu aplicación está lista para producción. Minimiza el código, optimiza las imágenes, etc.


