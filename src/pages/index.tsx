import Layout from '@/components/Layout';
import SalesSumary from '@/components/sales/SalesSumary';
import L4 from '@/components/svgs/Loader';
import { useResumen } from '@/hooks/useResumen';
import Head from 'next/head';

function Home() {
	const { isLoading, resumen } = useResumen();

	return isLoading ? (
		<div className='flex justify-center items-start w-full h-screen text-white text-3xl text-center'>
			<L4 />
		</div>
	) : (
		<>
			<Head>
				<title>Home Pyme Desk | Panel de metricas</title>
				<meta
					name='description'
					content='Consulte las métricas de resumen en nuestra página de inicio, incluyendo datos de ventas, pedidos y rendimiento de su negocio.'
				/>
			</Head>

			<main className='flex items-start text-dark w-full min-h-[calc(100vh-80px)] dark:text-light sm:items-start pb-16'>
				{isLoading ? (
					<p>Loading</p>
				) : (
					<Layout className='flex flex-col items-center gap-2 pt-2 '>
						{resumen && <SalesSumary resumen={resumen} />}
					</Layout>
				)}
			</main>
		</>
	);
}

export default Home;
