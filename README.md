# ADAcheap

ADAcheap es una aplicación web diseñada para la compra y venta de productos de segunda mano de manera sencilla y eficiente. Los usuarios pueden subir información sobre sus productos, compartirlos fácilmente a través de redes sociales y gestionar su inventario personal. 

## Características Principales

- **Subida de productos:** Los usuarios pueden agregar productos con nombre, precio, imagen y sus datos de contacto.
- **Lista de productos:** Los productos se muestran en una lista interactiva con opciones para borrarlos.
- **Almacenamiento local:** Los productos se guardan en el navegador utilizando `localStorage`.
- **Compartir productos:** Cada producto se puede compartir mediante un enlace generado automáticamente y publicado en Twitter.
- **Categorías visuales:** Los productos se pueden clasificar en categorías con colores distintivos para facilitar la organización y búsqueda.

---

## Requisitos

Para ejecutar ADAcheap en un entorno local, asegúrate de tener lo siguiente:

- Navegador moderno (Chrome, Firefox, Edge, etc.).
- Un servidor local (por ejemplo, [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) en Visual Studio Code).

---

## Instrucciones para la Ejecución

Sigue estos pasos para ejecutar ADAcheap en tu entorno local:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/Juls-ux/username-project-promo-c-pt-module-2-team-2.git
   cd username-project-promo-c-pt-module-2-team-2
   ```

2. **Abre el proyecto:**
   
   Abre los archivos del proyecto en tu editor de texto preferido (Visual Studio Code recomendado).

3. **Inicia un servidor local:**
   Si estás utilizando Visual Studio Code, puedes hacer clic derecho en el archivo `index.html` y seleccionar "Open with Live Server".

4. **Accede a la aplicación:**
   
   Una vez iniciado el servidor local, abre el navegador y ve a la dirección que el servidor indique (por ejemplo, `http://127.0.0.1:5500`).

---

## Estructura del Proyecto

### Archivos principales

- **`index.html`:** Contiene la estructura básica de la aplicación.
- **`main.css`:** Estiliza la interfaz de usuario.
- **`functions.js`:** Contiene la lógica principal de la aplicación, incluyendo:
  - Gestión de eventos.
  - Creación y renderización de productos.
  - Persistencia de datos en `localStorage`.
  - Integración con la API de generación de enlaces.
- **`colors.js`:** Lógica adicional para la funcionalidad de categorías con colores distintivos.
- **`collapsables.js`:** Maneja la interacción con los menús desplegables para seleccionar opciones en el formulario.
- **`inputs.js`:** Gestiona la subida y validación de datos del formulario, incluyendo:
  - Actualización en tiempo real de la información de la tarjeta del producto.
  - Subida de imágenes y previsualización dinámica.
  - Validación de campos obligatorios (nombre, precio, datos del vendedor).
  - Limpieza del formulario mediante un botón de reinicio.
- **`validator.js`:** Contiene funciones dedicadas a la validación de los formularios:
  - **Validación de campos vacíos:** Comprueba si un campo está relleno.
  - **Validación numérica:** Verifica si los valores ingresados son numéricos.
  - **Validación de email:** Asegura que el correo electrónico tenga un formato válido.
  - **Validación de teléfono:** Comprueba que el número de teléfono tenga 9 dígitos.

---

## Funcionalidades Clave

### Subida de Productos

1. Completa los campos obligatorios:
   - Imagen del producto.
   - Nombre del producto.
   - Precio.
   - Nombre del vendedor.
   - Email y teléfono.
2. Haz clic en "AÑADIR PRODUCTO" para guardarlo.

### Lista de Productos

- Los productos agregados aparecerán en una lista dinámica con su imagen, precio y datos relevantes.
- Cada producto cuenta con un botón para eliminarlo individualmente.

### Clasificación por Categorías

- Selecciona una categoría al subir un producto (Muebles, Ropa, Informática u Otros).
- Cada categoría tiene un color específico para identificar fácilmente los productos:
  - **Verde:** Muebles.
  - **Rosa:** Ropa.
  - **Morado:** Informática.
  - **Naranja:** Otros.

### Compartir Productos

- Una vez agregado un producto, se genera un enlace único que puede compartirse por redes sociales.
- Incluye un botón para tuitear directamente el enlace.

### Validación de Formularios

- La aplicación verifica automáticamente los campos obligatorios antes de aceptar el producto.
- Las validaciones incluyen:
  - Comprobación de campos vacíos.
  - Validación del formato de email.
  - Verificación de que el precio y el teléfono sean numéricos y tengan el formato adecuado.

### Borrar Productos

- La opción "BORRAR PRODUCTOS" permite eliminar todos los productos guardados.

### Interacción con Formularios

- Menús desplegables permiten a los usuarios ocultar y mostrar secciones del formulario para mejorar la experiencia de usuario.

---

## Tecnologías Utilizadas

- **HTML5:** Para la estructura del contenido.
- **CSS3:** Para el diseño y la estética.
- **JavaScript (ES6):** Para la lógica interactiva de la aplicación.
- **LocalStorage:** Para el almacenamiento persistente de los productos.
- **API de Adalab:** Para la generación de enlaces de productos.

---

## Contribución

Si deseas contribuir al desarrollo de ADAcheap:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios: `git checkout -b mi-nueva-funcionalidad`.
3. Realiza tus modificaciones y haz un commit: `git commit -m 'Añadida nueva funcionalidad'`.
4. Envía tus cambios al repositorio remoto: `git push origin mi-nueva-funcionalidad`.
5. Abre un Pull Request explicando los cambios realizados.

---

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo `LICENSE` para más detalles.

---

## Autor

ADAcheap fue desarrollado por estherbg85, fafafaniia, Juls-ux, 16IMA.

Si tienes alguna duda o sugerencia, no dudes en contactarnos. ¡Gracias por usar ADAcheap!


