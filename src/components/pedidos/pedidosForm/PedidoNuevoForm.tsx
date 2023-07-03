import Checkbox from '@/components/formComponents/Checkboxes';
import InputsForms from '@/components/pagination/forms/InputsForm';
import InputFormIcon from '@/components/pagination/forms/inputFromIcons';
import { SelectMenu1 } from '@/components/pagination/forms/selectForm';
import { useFetchProductos } from '@/hooks/useFectchProductos';
import { useUsuarios } from '@/hooks/useUsuarios';
import { useEffect, useState } from 'react';
//Icons
import { BsCartCheck } from 'react-icons/bs';

const reglaDeEvioOptions = [
	{ id: 0, caption: 'Selecione metodo de envío' },
	{ id: 1, caption: 'domicilio' },
	{ id: 2, caption: 'recoge' }
];

const PedidoNuevoForm = () => {
	type UsuarioOption = {
		id: number;
		caption: string;
	};

	type ProductoOption = {
		id: number;
		caption: string;
	};

	const { usuarios } = useUsuarios();
	const { productos } = useFetchProductos();
	const [usuarioOptions, setUsuarioOptions] = useState<UsuarioOption[]>([]);
	const [productoOptions, setProductoOptions] = useState<ProductoOption[]>([]);
	const [valueUsuario, setValueUsuario] = useState<number | string>(0);
	const [valueProducto, setValueProducto] = useState<number | string>(0);
	const [valueRegla, setValueRegla] = useState<number | string>(0);
	const [pagochecked, setPagoChecked] = useState(false);

	useEffect(() => {
		// Para usuarios
		if (Array.isArray(usuarios)) {
			const usuarioOptions = [
				{ id: 0, caption: 'Seleccione al usuario' },
				...usuarios.map((usuario: any) => ({
					id: usuario.id,
					caption: usuario.nombre
				}))
			];
			setUsuarioOptions(usuarioOptions);
		}

		// Para productos
		if (Array.isArray(productos)) {
			const productoOptions = [
				{ id: 0, caption: 'Seleccione un producto' },
				...(productos as any[]).map((producto: any) => ({
					id: producto.id,
					caption: producto.nombre
				}))
			];
			setProductoOptions(productoOptions);
		}
	}, [usuarios, productos]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		/**{
			"cliente": 5,
			"estado": "pendiente",
			"regla_envio": "domicilio",
			"pagado": true,
			"productos": [
				{
					"producto": 5,
					"cantidad": 2
				},
				{
					"producto": 6,
					"cantidad": 1
				}
			],
			"observaciones":"Buen producto"
		} */
		console.log(valueUsuario);
		console.log(valueProducto);
	};

	return (
		<main className='flex flex-col justify-start items-center pt-8 w-full min-h-[calc(100vh-100px)] '>
			<section className='flex flex-col gap-16  w-3/4  p-8 shadow-lg lg:w-4/5 md:w-[90%] xs:w-[95%] sm:px-4'>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col justify-center items-center gap-6 mt-6  '
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
					/>

					<button className='w-[220px] ml-auto bg-zinc-100 hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-gray-400 rounded-xl shadow active:relative active:top-[1px] sm:mr-auto mb-4'>
						Crear
					</button>
				</form>
			</section>
		</main>
	);
};

export default PedidoNuevoForm;
