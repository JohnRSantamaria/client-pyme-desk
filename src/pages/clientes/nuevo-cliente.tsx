import AnimatedText from '@/components/AnimateText';
import React, { useState } from 'react';
import InputsForms from '@/components/forms/InputsForm';
import { SelectMenu1 } from '@/components/forms/selectForm';
import validation from '@/helpers/validation';
import { DatosUsuario, ErroresValidacion } from '@/types';
import Swal from 'sweetalert2';
import { enviarDatos } from '@/helpers/postDataClients';

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
		nombre: '',
		celular: '',
		correo: '',
		direccion: ''
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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let erroresDeValidacion = validation(userData);
		let userDataActualizado = { ...userData };
		let esValido = true;

		setCityError(null);

		if (value === 0) {
			setCityError('Debe seleccionar una ciudad');
			esValido = false;
		} else {
			const ciudadSeleccionada = cuidades.find((ciudad) => ciudad.id === value);
			if (ciudadSeleccionada) {
				userDataActualizado.ciudad = ciudadSeleccionada.caption;
			}
		}

		setErrors(erroresDeValidacion);

		if (Object.keys(erroresDeValidacion).length !== 0) {
			esValido = false;
		}

		if (esValido) {
			setUserData(userDataActualizado);
			try {
				await enviarDatos(userDataActualizado);

				setUserData({
					nombre: '',
					celular: '',
					correo: '',
					direccion: ''
				});
				Swal.fire({
					title: 'Usuario Creado Con exito',
					icon: 'success',
					confirmButtonColor: '#58E6D9'
				});
			} catch (error) {
				Swal.fire({
					title: 'Hubo un error intenta de nuevo',
					icon: 'error',
					confirmButtonColor: '#58E6D9'
				});
			}
		} else {
			Swal.fire({
				title: 'Ingresa todos los datos',
				icon: 'error',
				confirmButtonColor: '#58E6D9'
			});
		}
	};

	return (
		<>
			<AnimatedText
				text='Nuevo cliente'
				className='!text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'
			/>

			<main className='flex flex-col justify-start items-center pt-8 w-full min-h-[calc(100vh-100px)]'>
				<section className='flex flex-col gap-16  w-3/4  p-8 shadow-lg lg:w-4/5 md:w-[90%] xs:w-[95%] sm:px-4'>
					<form
						onSubmit={handleSubmit}
						className='flex flex-col justify-center items-center gap-6 mt-6  '
					>
						<InputsForms
							name='nombre'
							label='Nombre'
							value={userData.nombre}
							onChange={handleInputChange}
							error={errors.nombre}
						/>
						<InputsForms
							name='celular'
							label='Celular'
							value={userData.celular}
							onChange={handleInputChange}
							error={errors.celular}
						/>
						<InputsForms
							name='correo'
							label='Email'
							value={userData.correo}
							onChange={handleInputChange}
							error={errors.correo}
						/>
						<InputsForms
							name='direccion'
							label='Direccion'
							value={userData.direccion}
							onChange={handleInputChange}
							error={errors.direccion}
						/>
						<SelectMenu1
							value={value}
							setValue={setValue}
							options={cuidades}
						/>

						<button className='w-[220px] ml-auto bg-zinc-100 hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-gray-400 rounded-xl shadow active:relative active:top-[1px] sm:mr-auto mb-4'>
							Crear
						</button>
					</form>
				</section>
			</main>
		</>
	);
};

export default Newclient;
