import React, { useState } from 'react';
import AnimatedText from '../AnimateText';
import InputsForms from '../pagination/forms/InputsForm';
import validation from '@/helpers/validation';
import { DatosUsuario, ErroresValidacion } from '@/types';
import { cuidades } from '@/components/clients/data';
import { enviarDatos } from '@/helpers/postDataClients';
import { SelectMenu1 } from '../pagination/forms/selectForm';
import Swal from 'sweetalert2';

const FormNuevoCliente = () => {
	const [value, setValue] = useState<number | string>(0);
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

				Swal.fire({
					title: 'Usuario Creado Con exito',
					icon: 'success',
					confirmButtonColor: '#58E6D9'
				});

				setUserData({
					nombre: '',
					celular: '',
					correo: '',
					direccion: ''
				});
				setValue(0);
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
			<section className='flex items-start w-full px-96 2xl:px-60 xl:px-40 lg:px-4 min-h-[calc(100vh-240px)] shadow-lg'>
				<form
					onSubmit={handleSubmit}
					className='w-full flex flex-col justify-center items-center gap-6 mt-6'
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

					<button className='w-[220px] ml-auto bg-zinc-100 hover:bg-zinc-200 text-gray-800 font-normal py-2 px-4 rounded-lg shadow active:relative active:top-[1px] sm:mr-auto mb-4'>
						Crear
					</button>
				</form>
			</section>
		</>
	);
};
export default FormNuevoCliente;
