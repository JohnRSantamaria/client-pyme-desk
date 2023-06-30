type DatosUsuario = {
	Nombre: string;
	Celular: string;
	Email: string;
	Direccion: string;
};

type ErroresValidacion = {
	[K in keyof DatosUsuario]?: string;
};

const validation = (datosUsuario: DatosUsuario): ErroresValidacion => {
	let errores: ErroresValidacion = {};

	// Validar que el nombre no esté vacío
	if (!datosUsuario.Nombre.trim()) {
		errores.Nombre = 'El campo Nombre es obligatorio';
	}

	// Validar que el celular no esté vacío
	if (!datosUsuario.Celular.trim()) {
		errores.Celular = 'El campo Celular es obligatorio';
	}

	// Validar que el email no esté vacío
	if (!datosUsuario.Email.trim()) {
		errores.Email = 'El campo Email es obligatorio';
	}

	// Validar que la dirección no esté vacío
	if (!datosUsuario.Direccion.trim()) {
		errores.Direccion = 'El campo Dirección es obligatorio';
	}

	return errores;
};

export default validation;
