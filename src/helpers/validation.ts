type DatosUsuario = {
	nombre: string;
	celular: string;
	correo: string;
	direccion: string;
};

type ErroresValidacion = {
	[K in keyof DatosUsuario]?: string;
};

const validation = (datosUsuario: DatosUsuario): ErroresValidacion => {
	let errores: ErroresValidacion = {};

	// Validar que el nombre no esté vacío
	if (!datosUsuario.nombre.trim()) {
		errores.nombre = 'El campo Nombre es obligatorio';
	}

	// Validar que el celular no esté vacío
	if (!datosUsuario.celular.trim()) {
		errores.celular = 'El campo Celular es obligatorio';
	}

	// Validar que el email no esté vacío
	if (!datosUsuario.correo.trim()) {
		errores.correo = 'El campo Email es obligatorio';
	}

	// Validar que la dirección no esté vacío
	if (!datosUsuario.direccion.trim()) {
		errores.direccion = 'El campo Dirección es obligatorio';
	}

	return errores;
};

export default validation;
