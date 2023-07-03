import Layout from '@/components/Layout';
import Clients from '@/components/clients/Clients';
import Head from 'next/head';

const Clientes: React.FC = () => {
	return (
		<>
			<Head>
				<title>JohnS Pyme Desk | Clientes</title>
				<meta
					name='description'
					content='Administre la información y los perfiles de sus clientes en esta página. Vea su historial de compras, preferencias y mantenga sus datos de contacto actualizados.'
				/>
			</Head>
			<main className='text-dark w-full min-h-[calc(100vh-80px)] dark:text-light'>
				<Layout>
					<Clients />
				</Layout>
			</main>
		</>
	);
};

export default Clientes;
