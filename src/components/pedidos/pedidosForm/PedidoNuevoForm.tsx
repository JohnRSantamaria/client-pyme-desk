import { useUsuarios } from '@/hooks/useUsuarios';

const PedidoNuevoForm = () => {
	const { usuarios } = useUsuarios();

	console.log(usuarios);
	return (
		<main className='flex flex-col justify-start items-center pt-8 w-full min-h-[calc(100vh-100px)] '>
			<section className='flex flex-col gap-16  w-3/4  p-8 shadow-lg lg:w-4/5 md:w-[90%] xs:w-[95%] sm:px-4'>
				<form className='flex flex-col justify-center items-center gap-6 mt-6  '>
					<button className='w-[220px] ml-auto bg-zinc-100 hover:bg-zinc-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow active:relative active:top-[1px] sm:mr-auto mb-4'>
						Enviar
					</button>
				</form>
			</section>
		</main>
	);
};

export default PedidoNuevoForm;

/**{
	"cliente": 5, // traerlo 
	"estado": "pendiente", //hacer 
	"regla_envio": "domicilio", //hacer 
	"pagado": true, default 
	"productos": [ //traer todos los productos
		{
			"producto": 5,
			"cantidad": 2
		},
		{
			"producto": 6,
			"cantidad": 1
		}
	],
	"observaciones":"Buen producto" //caja de texto
} */
