# Aplicación de Gestión de Pedidos y Clientes

Descripción: Desarrollé una aplicación web integral para la gestión de pedidos y clientes de un comercio, combinando una API REST con una interfaz de usuario amigable.

Backend:

Tecnologías: DJango, DJango Rest Framework.
Base de datos: SQLite.
Funcionalidades:
Gestión de pedidos (/pedidos endpoint): operaciones CRUD sobre pedidos con paginación y filtros. Los pedidos incluyen información como ID, fecha, estado, pago, detalles del cliente y los productos.
Gestión de clientes (/usuarios endpoint): operaciones CRUD sobre clientes con paginación y filtros.
Métricas de resumen (/resumen endpoint): muestra el número de pedidos, clientes, ingresos del último mes, ciudad con más pedidos y producto más vendido.
Frontend:

Tecnología: Next.js.
Rutas:
Inicio: muestra métricas de resumen.
Pedidos: lista de pedidos con capacidad para ver detalles, aplicar filtros y editar estados.
Crear Pedido: formulario para crear un nuevo pedido.
Clientes: lista de clientes con opción de ver detalles y aplicar filtros.
Crear Cliente: formulario para agregar un nuevo cliente.
Navegación: la aplicación incluye mecanismos de navegación entre las distintas rutas.
Características Adicionales:

Responsive: la aplicación está optimizada para diferentes tamaños de pantalla.
Dark Mode: opción de cambiar a un tema oscuro para mejorar la experiencia del usuario en entornos con poca luz.
