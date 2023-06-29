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
			<div className='flex w-full flex-col items-center justify-start min-h-[calc(100vh-80px)] dark:text-light'>
				<Layout className='flex flex-col items-center gap-2 pt-2'>
					<Clients />
				</Layout>
			</div>
		</>
	);
};

export default Clientes;
