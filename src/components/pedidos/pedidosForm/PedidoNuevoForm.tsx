import React, { useState } from 'react';
import Checkbox from '@/components/formComponents/Checkboxes';
import InputsForms from '@/components/formComponents/InputsForm';
import InputFormIcon from '@/components/formComponents/inputFromIcons';
import { SelectMenu1 } from '@/components/formComponents/selectForm';
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
import AnimatedText from '@/components/AnimateText';

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
		const observaciones = pedidoData.observaciones;
		handleSubmit(
			valueUsuario,
			valueRegla,
			valueProducto,
			cantidad,
			pagochecked,
			observaciones,
			async (data) => {
				await enviar(data);
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
			}
		);
	};

	return (
		<>
			<AnimatedText
				text='Nuevos Pedidos'
				className='!text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'
			/>
			<section className='flex flex-col items-center justify-start w-full px-96 2xl:px-60 xl:px-40 lg:px-4 min-h-[calc(100vh-240px)] shadow-lg'>
				<form
					onSubmit={handleFormSubmit}
					className='w-full flex flex-col justify-center items-center gap-6 mt-6'
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
								inputClassName='rounded-xl dark:bg-zinc-800'
								decorationClassName='dark:bg-white dark:text-zinc-400 text-zinc-900 border-zinc-400 rounded-xl dark:bg-zinc-800'
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
				</form>
				<Collapse isOpened={!!errors.length}>
					<article className='flex flex-col w-full text-black dark:text-white gap-2 border p-2 '>
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
			</section>
		</>
	);
};

export default PedidoNuevoForm;
