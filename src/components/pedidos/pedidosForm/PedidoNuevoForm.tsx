import React, { useState } from 'react';
import Checkbox from '@/components/formComponents/Checkboxes';
import InputsForms from '@/components/pagination/forms/InputsForm';
import InputFormIcon from '@/components/pagination/forms/inputFromIcons';
import { SelectMenu1 } from '@/components/pagination/forms/selectForm';
import { useFetchProductos } from '@/hooks/useFectchProductos';
import { useUsuarios } from '@/hooks/useUsuarios';
import { BsCartCheck } from 'react-icons/bs';
import { DatosPedidos } from '@/types';
import { reglaDeEvioOptions } from './data';
import useOptionsPedidos from '@/hooks/useOptionsPedidos';
import { useFormValidation } from '@/hooks/useFormValidation';
//Sweet Alert
import Swal from 'sweetalert2';
import { Collapse } from 'react-collapse';
import { usePostPedidos } from '@/hooks/usePostPedidos';

const PedidoNuevoForm = () => {
	const { usuarios } = useUsuarios();
	const { productos } = useFetchProductos();
	const { productoOptions, usuarioOptions } = useOptionsPedidos(usuarios, productos);
	const { enviar } = usePostPedidos();
	const { errors, handleSubmit } = useFormValidation();

	const [valueUsuario, setValueUsuario] = useState<number | string>(0);
	const [valueProducto, setValueProducto] = useState<number | string>(0);
	const [valueRegla, setValueRegla] = useState<number | string>(0);
	const [pagochecked, setPagoChecked] = useState(false);

	const [pedidoData, setPedidoData] = useState<DatosPedidos>({
		cantidad: '',
		observaciones: ''
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPedidoData({
			...pedidoData,
			[e.target.name]: e.target.value
		});
	};

	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const cantidad = Number(pedidoData.cantidad);

		handleSubmit(valueUsuario, valueRegla, valueProducto, cantidad, (data) => {
			enviar(data);
			Swal.fire({
				icon: 'success',
				title: 'Enviado con exito'
			});
			setValueUsuario(0);
			setValueProducto(0);
			setValueRegla(0);
			setPagoChecked(false);
			setPedidoData({
				cantidad: '',
				observaciones: ''
			});
		});
	};

	console.log();

	return (
		<main className='flex flex-col justify-start items-center pt-8 w-full min-h-[calc(100vh-100px)] '>
			<section className='flex flex-col gap-16 w-3/4 p-8 shadow-lg lg:w-4/5 md:w-[90%] xs:w-[95%] sm:px-4'>
				<form
					onSubmit={handleFormSubmit}
					className='flex flex-col justify-center items-baseline gap-6 mt-6'
				>
					<SelectMenu1
						value={valueUsuario}
						setValue={setValueUsuario}
						options={usuarioOptions}
					/>
					<span className='w-full flex flex-row flex-nowrap justify-between items-center gap-2 sm:flex-wrap'>
						<span className='w-full'>
							<SelectMenu1
								value={valueProducto}
								setValue={setValueProducto}
								options={productoOptions}
							/>
						</span>
						<span className='w-[200px] sm:w-full'>
							<InputFormIcon
								name='cantidad'
								label='Cantidad *'
								type='number'
								decoration={<BsCartCheck size='1rem' />}
								inputClassName='rounded-xl '
								decorationClassName='dark:bg-white text-zinc-900 border-zinc-400 rounded-xl'
								value={pedidoData.cantidad}
								onChange={handleInputChange}
							/>
						</span>
					</span>
					<span className='w-full flex flex-row flex-nowrap justify-between items-center gap-2 sm:flex-wrap'>
						<span className='w-full'>
							<SelectMenu1
								value={valueRegla}
								setValue={setValueRegla}
								options={reglaDeEvioOptions}
							/>
						</span>
						<span className='w-[200px] sm:w-full'>
							<Checkbox
								name='pago'
								label='Pagó'
								checked={pagochecked}
								onChange={setPagoChecked}
							/>
						</span>
					</span>
					<InputsForms
						label='Observaciones'
						name='observaciones'
						value={pedidoData.observaciones}
						onChange={handleInputChange}
					/>
					<button className='flex justify-center items-center w-[220px] ml-auto bg-zinc-100 hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-gray-400 rounded-xl shadow active:relative active:top-[1px] sm:mr-auto mb-4'>
						Crear
					</button>
					<Collapse isOpened={!!errors.length}>
						<article className='flex flex-col w-full text-black dark:text-white gap-2 '>
							<h3>Errores</h3>
							{errors.map((error, index) => (
								<div
									key={index}
									className='border rounded-lg px-2 border-zinc-700 '
								>
									{error.message}
								</div>
							))}
						</article>
					</Collapse>
				</form>
			</section>
		</main>
	);
};

export default PedidoNuevoForm;
