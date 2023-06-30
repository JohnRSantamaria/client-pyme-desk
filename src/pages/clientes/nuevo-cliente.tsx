import AnimatedText from '@/components/AnimateText';
import React, { useState } from 'react';
import InputsForms from '@/components/forms/InputsForm';
import { SelectMenu1 } from '@/components/forms/selectForm';
import validation from '@/helpers/validation';
import { DatosUsuario, ErroresValidacion } from '@/types';

const Newclient: React.FC = () => {
	const [value, setValue] = useState<number | string>(0);
	const cuidades = [
		{ id: 0, caption: 'Ingresa tu cuidad' },
		{ id: 1, caption: 'Barranquilla' },
		{ id: 2, caption: 'Cartagena' },
		{ id: 3, caption: 'Bucaramanga' },
		{ id: 4, caption: 'Pereira' },
		{ id: 5, caption: 'Santa Marta' },
		{ id: 6, caption: 'Ibagué' },
		{ id: 7, caption: 'Manizales' },
		{ id: 8, caption: 'Cali' },
		{ id: 9, caption: 'Bogotá' },
		{ id: 10, caption: 'Medellín' }
	];

	const [errors, setErrors] = React.useState<ErroresValidacion>({});
	const [cityError, setCityError] = React.useState<string | null>(null);

	const [userData, setUserData] = React.useState<DatosUsuario>({
		Nombre: '',
		Celular: '',
		Email: '',
		Direccion: ''
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value
		});

		setErrors(
			validation({
				...userData,
				[e.target.name]: e.target.value
			})
		);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let erroresDeValidacion = validation(userData);
		let userDataActualizado = { ...userData };
		let esValido = true;

		// Reset city error
		setCityError(null);

		// Validar si se seleccionó una ciudad
		if (value === 0) {
			// Establecer error de ciudad
			setCityError('Debe seleccionar una ciudad');
			esValido = false;
		} else {
			// Buscar la ciudad seleccionada
			const ciudadSeleccionada = cuidades.find((ciudad) => ciudad.id === value);

			// Actualizar userDataActualizado con la ciudad seleccionada
			if (ciudadSeleccionada) {
				userDataActualizado.ciudad = ciudadSeleccionada.caption;
			}
		}

		// Actualizar el estado de errores
		setErrors(erroresDeValidacion);

		// Comprobar si hay errores de validación
		if (Object.keys(erroresDeValidacion).length !== 0) {
			esValido = false;
		}

		// Si no hay errores y la ciudad fue seleccionada, aquí puedes continuar con la lógica que desees
		if (esValido) {
			// Actualizar el estado de userData con userDataActualizado
			setUserData(userDataActualizado);

			// Ahora userDataActualizado tiene los datos más recientes
			console.log(userDataActualizado);
		}
	};

	return (
		<>
			<AnimatedText
				text='Nuevo cliente'
				className='!text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'
			/>

			<main className='flex flex-col justify-start items-center pt-8 w-full min-h-[calc(100vh-100px)]'>
				<section className='flex flex-col gap-16  w-3/4  '>
					<form
						onSubmit={handleSubmit}
						className='flex flex-col justify-center items-center gap-6 mt-6  '
					>
						<InputsForms
							name='Nombre'
							label='Nombre'
							value={userData.Nombre}
							onChange={handleInputChange}
							error={errors.Nombre}
						/>
						<InputsForms
							name='Celular'
							label='Celular'
							value={userData.Celular}
							onChange={handleInputChange}
							error={errors.Celular}
						/>
						<InputsForms
							name='Email'
							label='Email'
							value={userData.Email}
							onChange={handleInputChange}
							error={errors.Email}
						/>
						<InputsForms
							name='Direccion'
							label='Direccion'
							value={userData.Direccion}
							onChange={handleInputChange}
							error={errors.Direccion}
						/>
						<SelectMenu1
							value={value}
							setValue={setValue}
							options={cuidades}
						/>
						{cityError && (
							<span className='w-full text-primary dark:text-primaryDark '>
								{cityError}
							</span>
						)}
						<button className='w-[260px] ml-auto bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow active:relative active:top-[1px] sm:mr-auto mb-4'>
							Crear
						</button>
					</form>
				</section>
			</main>
		</>
	);
};

export default Newclient;
