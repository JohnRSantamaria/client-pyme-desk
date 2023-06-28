import Layout from '@/components/Layout';
import SalesSumary from '@/components/sales/SalesSumary';
import { useResumen } from '@/hooks/useResumen';
import Head from 'next/head';

function Home() {
	const { isLoading, resumen } = useResumen();

	return (
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
