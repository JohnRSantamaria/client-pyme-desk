import Layout from '@/components/Layout';
import { useResumen } from '@/hooks/useResumen';
import Head from 'next/head';

export default function Home() {
	const { isLoading, resumen } = useResumen();

	console.log(resumen);

	return (
		<>
			<Head>
				<title>Home Pyme Desk | Panel de metricas</title>
				<meta
					name='description'
					content='Consulte las métricas de resumen en nuestra página de inicio, incluyendo datos de ventas, pedidos y rendimiento de su negocio.'
				/>
			</Head>
			<main className='flex items-center text-dark w-full min-h-[calc(100vh-80px)] dark:text-light sm:items-start'>
				<Layout className='pt-0 md:pt-16 sm:pt-16'>
					<div className='flex items-start justify-between w-full  border-2 border-red-800'>
						{isLoading ? (
							<span className='text-2xl'>Loading... </span>
						) : (
							<span className='text-2xl'>Hola</span>
						)}
					</div>
				</Layout>
			</main>
		</>
	);
}
