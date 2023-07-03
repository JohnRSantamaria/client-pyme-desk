import Layout from '@/components/Layout';
import SalesSumary from '@/components/sales/SalesSumary';
import Head from 'next/head';

function Home() {
	return (
		<>
			<Head>
				<title>Inicio Pyme Desk | Panel de metricas</title>
				<meta
					name='description'
					content='Consulte las métricas de resumen en nuestra página de inicio, incluyendo datos de ventas, pedidos y rendimiento de su negocio.'
				/>
			</Head>
			<main className='text-dark w-full min-h-[calc(100vh-80px)] dark:text-light'>
				<Layout>
					<SalesSumary />
				</Layout>
			</main>
		</>
	);
}

export default Home;
